import React, { useEffect } from 'react';
import Head from 'next/head'
import { getPosts } from '../api/ghostApi';
import MainNav from '../components/MainNav';

export default function Home({ posts, error  }) {
  console.log(posts);
  if (error) {
    console.error(error);
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainNav />
        <h1>All posts:</h1>
        <ul>
        {posts && posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const {posts, error } = (await getPosts());
  return { props: { posts, error } };
}
