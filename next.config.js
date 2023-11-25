/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: ['babyshik.test'],
    },
    env: {
      BASE_URL: "http://localhost:3000/",
      API_URL: "http://babyshik.test/api/v1/",
    },


}

module.exports = nextConfig
