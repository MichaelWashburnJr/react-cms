import { getStaticContentUrl } from './config';

export function getRelativeUrl(url) {
  return url.replace(/^(?:\/\/|[^/]+)*\//, '')
}

export function transformGhostStaticContentUrl(url) {
  if (!url) {
    return url;
  }
  return `${getStaticContentUrl()}/${getRelativeUrl(url)}`
}