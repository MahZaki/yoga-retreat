const fs = require('fs');
const https = require('https');

const API_KEY = 'bgOwLYzNCcO3RRdVO0Y1UeMJK4XOW4AuHGG3uwhqgiEddcVMf2PL7p16';

const tasks = [
  { query: 'forest wellness nature spa', filename: 'wellness-retreat-forest.jpg' },
  { query: 'yoga mat packing travel suitcase', filename: 'packing-yoga-mat.jpg' },
  { query: 'travel budget planning notebook pen', filename: 'retreat-cost-planning.jpg' },
  { query: 'outdoor yoga class park nature group', filename: 'yoga-near-me-hero.jpg' },
  { query: 'colorado rocky mountain yoga meditation nature', filename: 'colorado-yoga-hero.jpg' }
];

async function fetchImage(task) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(task.query)}&per_page=5&orientation=landscape`;
  
  const options = {
    headers: { 'Authorization': API_KEY }
  };

  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.photos && json.photos.length > 0) {
            let photoUrl = json.photos[0].src.large2x || json.photos[0].src.original || json.photos[0].src.large;
            // Pick a different index for yoga-near-me-hero just to be safe
            if (task.filename === 'yoga-near-me-hero.jpg' && json.photos.length > 1) {
               photoUrl = json.photos[1].src.large2x || json.photos[1].src.original || json.photos[1].src.large;
            }
            downloadImage(photoUrl, `/Users/mac/Desktop/yogaretreat/public/images/blog/${task.filename}`)
              .then(() => resolve(json.photos[0].alt))
              .catch(reject);
          } else {
            reject(new Error('No photos found for ' + task.query));
          }
        } catch (e) {
          reject(e);
        }
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
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  for (const task of tasks) {
    console.log(`Fetching ${task.filename}...`);
    try {
      const alt = await fetchImage(task);
      console.log(`Saved ${task.filename} (Alt: ${alt})`);
    } catch (e) {
      console.error(`Failed ${task.filename}:`, e);
    }
  }
}

main();
