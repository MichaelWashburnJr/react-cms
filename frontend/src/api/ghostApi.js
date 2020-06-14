import GhostContentAPI from "@tryghost/content-api";
import { getGhostApi, getGhostApiKey } from '../constants/Config';

// Create API instance with site credentials
const getApi = () => new GhostContentAPI({
  url: getGhostApi(),
  key: getGhostApiKey(),
  version: "v3"
});

export async function getPosts() {
  console.log(getGhostApiKey());
  return await getApi().posts
    .browse({
      limit: "all"
    })
    .then(posts => {
      return { posts, error: null };
    }, error => {
      return { posts: [], error: error.toString() }
    })
}

