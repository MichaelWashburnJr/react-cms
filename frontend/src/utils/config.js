import getConfig from 'next/config';

export function getGhostApiUrl() {
  console.log(getConfig());
  const { serverRuntimeConfig: { GHOST_API_URL } } = getConfig();
  return GHOST_API_URL;
}

export function getGhostApiKey() {
  const { serverRuntimeConfig: { GHOST_API_KEY } } = getConfig();
  return GHOST_API_KEY;
}

export function getStaticContentUrl() {
  const { publicRuntimeConfig: { STATIC_CONTENT_URL } } = getConfig();
  return STATIC_CONTENT_URL;
}