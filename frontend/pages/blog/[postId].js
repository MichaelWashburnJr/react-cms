import React from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withRouter } from "next/router";
import { compose } from "recompose";
import ReactMarkdown from "react-markdown";

const Post = ({ post }) => {
  if (!post) {
    return null;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <ReactMarkdown source={post.body} />
    </div>
  );
  return post.title;
};

const GET_BLOG_POSTS = gql`
  query($id: ID!) {
    post(id: $id) {
      id,
      created_at,
      updated_at,
      title,
      body,
      metaDescription,
      featuredImage {
        url
      }
    }
  }
`;

export default compose(
  withRouter,
  graphql(GET_BLOG_POSTS, {
    options: props => {
      return {
        variables: {
          id: props.router.query.postId
        }
      };
    },
    props: ({ data }) => ({ post: data.post })
  })
)(Post);
