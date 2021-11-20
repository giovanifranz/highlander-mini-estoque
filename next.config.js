/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_API_API_KEY: process.env.NEXT_API_API_KEY,
    NEXT_API_AUTH_DOMAIN: process.env.NEXT_API_AUTH_DOMAIN,
    NEXT_API_DATABASE_URL: process.env.NEXT_API_DATABASE_URL,
    NEXT_API_PROJECT_ID: process.env.NEXT_API_PROJECT_ID,
    NEXT_API_STORAGE_BUCKET: process.env.NEXT_API_STORAGE_BUCKET,
    NEXT_API_MESSAGING_SENDER_ID: process.env.NEXT_API_MESSAGING_SENDER_ID,
    NEXT_API_APP_ID: process.env.NEXT_API_APP_ID,
  },
};