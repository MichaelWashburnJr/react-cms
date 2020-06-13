import GhostContentAPI from "@tryghost/content-api";
import { GHOST_API_URL, CONTENT_API_KEY } from '../constants/Config';

// Create API instance with site credentials
const getApi = () => new GhostContentAPI({
  url: GHOST_API_URL,
  key: CONTENT_API_KEY,
  version: "v3"
});

export async function getPosts() {
  return await getApi().posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
      return [];
    });
}

