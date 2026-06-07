/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for modern browsers
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
};

export default nextConfig;
