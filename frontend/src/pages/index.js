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
        Test 12345
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts());
  return { props: { posts } };
}
