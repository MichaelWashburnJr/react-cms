import GhostContentAPI from "@tryghost/content-api";
import { getGhostApi, getGhostApiKey } from '../constants/Config';

// Create API instance with site credentials
const getApi = () => new GhostContentAPI({
  url: getGhostApi(),
  key: getGhostApiKey(),
  version: "v3"
});

export async function getPosts({ limit = 'all', filter } = {}) {
  return await getApi().posts
    .browse({
      limit,
      filter,
    })
    .then(posts => {
      console.log(posts);
      return { posts, error: null };
    }, error => {
      console.error(error);
      debugger;
      return { posts: [], error: error.toString() }
    })
}

export async function getFeaturedPosts() {
  return getPosts({ filter: 'featured:true' });
}

