import React, { useEffect } from 'react';
import NoSSR from 'react-no-ssr'
import Head from 'next/head'
import { getPosts } from '../api/ghostApi';
import MainNav from '../components/MainNav';

export default function Home({ posts, error  }) {
  const value = process.env.CONTENT_API_KEY;
  return (
    <div>
      <NoSSR>
        {error && console.log(error)}
        {error}
        {value}
      </NoSSR>
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
  const { posts, error = null } = (await getPosts());
  return { props: { posts, error } };
}
