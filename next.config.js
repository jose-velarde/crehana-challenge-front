/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['']
  },
  env: {
    API: 'https://jose-velarde-drf.herokuapp.com/crehana/',
    AUTH: 'https://jose-velarde-drf.herokuapp.com/account/',
    PAGE_SIZE: 12,
  },
}
