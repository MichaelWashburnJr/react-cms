module.exports = {
  serverRuntimeConfig: {
    GHOST_API_URL: process.env.GHOST_API_URL,
    GHOST_API_KEY:  process.env.CONTENT_API_KEY,

  },
  publicRuntimeConfig: {
    STATIC_CONTENT_URL: process.env.STATIC_CONTENT_URL
  },
}