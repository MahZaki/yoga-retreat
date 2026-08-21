const fs = require('fs');
const https = require('https');
const path = require('path');
const { execSync } = require('child_process');

const API_KEY = 'bgOwLYzNCcO3RRdVO0Y1UeMJK4XOW4AuHGG3uwhqgiEddcVMf2PL7p16';

const imageTasks = [
  { query: 'packing suitcase clothes neatly folded', filename: 'packing-yoga-clothes.jpg' },
  { query: 'travel journal passport wooden table', filename: 'retreat-booking-journal.jpg' },
  { query: 'tropical resort luxury pool', filename: 'retreat-budget-tropical.jpg' },
  { query: 'morning coffee journal notebook', filename: 'travel-journal-morning.jpg' },
  { query: 'ice bath cold plunge steam', filename: 'wellness-contrast-therapy.jpg' },
  { query: 'singing bowls sound healing meditation', filename: 'wellness-sound-healing.jpg' }
];

async function fetchImage(task) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(task.query)}&per_page=3&orientation=landscape`;
  const options = { headers: { 'Authorization': API_KEY } };

  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.photos && json.photos.length > 0) {
            let photoUrl = json.photos[0].src.large2x || json.photos[0].src.original || json.photos[0].src.large;
            downloadImage(photoUrl, `/Users/mac/Desktop/yogaretreat/public/images/blog/${task.filename}`)
              .then(() => resolve(json.photos[0].alt))
              .catch(reject);
          } else {
            console.log('No photos found for ' + task.query + ', trying broader query');
            reject(new Error('No photos'));
          }
        } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
  });
}

function update2025to2026() {
  const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
      const dirFile = path.join(dir, file);
      try {
        filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
      } catch (err) { }
    });
    return filelist;
  };

  const files = walkSync('/Users/mac/Desktop/yogaretreat/app/blog').filter(f => f.endsWith('.js'));
  let totalReplaced = 0;
  for (const f of files) {
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes('2025')) {
      content = content.replace(/2025/g, '2026');
      fs.writeFileSync(f, content, 'utf8');
      totalReplaced++;
    }
  }
  console.log(`Replaced 2025 -> 2026 in ${totalReplaced} blog files.`);
}

async function main() {
  console.log('--- Updating 2025 to 2026 ---');
  update2025to2026();

  console.log('\n--- Fetching missing inline images ---');
  for (const task of imageTasks) {
    try {
      const alt = await fetchImage(task);
      console.log(`✅ Saved ${task.filename} (Alt: ${alt})`);
    } catch (e) {
      console.error(`❌ Failed ${task.filename}:`, e.message);
    }
  }
}

main();
