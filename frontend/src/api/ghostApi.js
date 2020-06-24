import GhostContentAPI from "@tryghost/content-api";
import { getGhostApiUrl, getGhostApiKey } from '../utils/config';
import { transformGhostStaticContentUrl } from '../utils/fixAbsoluteGhostUrl';

// Create API instance with site credentials
const getApi = () => new GhostContentAPI({
  url: getGhostApiUrl(),
  key: getGhostApiKey(),
  version: "v3"
});

function fixPostsUrls(posts) {
  return posts.map(post => ({
    ...post,
    feature_image: transformGhostStaticContentUrl(post.feature_image)
  }))
}

export async function getPosts({ limit = 'all', filter } = {}) {
  return await getApi().posts
    .browse({
      limit,
      filter,
    })
    .then(posts => {
      return { posts: fixPostsUrls(posts), error: null };
    }, error => {
      return { posts: [], error: error.toString() }
    })
}

export async function getFeaturedPosts() {
  return getPosts({ filter: 'featured:true' });
}

