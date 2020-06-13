import React, { useEffect } from 'react';
import Head from 'next/head'
import { getPosts } from '../api/ghostApi';
import MainNav from '../components/MainNav';

export default function Home({ posts }) {
  console.log(posts);
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
  const posts = (await getPosts());
  return { props: { posts } };
}
