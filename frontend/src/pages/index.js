import React from 'react';
import Head from 'next/head'
import { getFeaturedPosts } from '../api/ghostApi';
import MainNav from '../components/MainNav';
import FeaturedPostsCarousel from '../components/FeaturedPostsCarousel';

export default function Home({ featuredPosts, error  }) {
  console.log(featuredPosts, error);
  return (
    <div>
      <Head>
        <title>Mike's Bait and Tackle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainNav />
        <FeaturedPostsCarousel posts={featuredPosts} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { posts, error = null } = (await getFeaturedPosts());
  return { props: { featuredPosts: posts, error } };
}
