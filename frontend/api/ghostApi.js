import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://localhost:8000',
  key: '280532dc5881d544691e68259d',
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });
}

