import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const Blog = ({ data }) => {
  const { posts } = data
  if (!posts) {
    return null
  }
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <a href={`/blog/${post.id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  )
}

const GET_BLOG_POSTS = gql`
  query Posts {
    posts(sort: "created_at") {
      id
      created_at
      updated_at
      title
      body
      metaDescription
      featuredImage {
        url
      }
    }
  }
`

const graphqlConnect = graphql(GET_BLOG_POSTS)

export default graphqlConnect(Blog)
