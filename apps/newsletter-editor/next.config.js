/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: require('node:path').join(__dirname, '../..'),
}

module.exports = nextConfig

