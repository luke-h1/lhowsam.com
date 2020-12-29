/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable no-unused-vars */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BlogWrapper,
  BlogList,
  BlogArticle,
  BlogHeader,
  BlogLink,
  BlogSection,
  BlogTitle,
  BlogTitleWrap,
} from './RecentBlogPostsElements';
import usePosts from '../../hooks/usePosts';

const RecentBlogPosts = ({ theme, data }) => {
  const posts = usePosts();
  return (
    <ThemeProvider theme={theme}>
      <>
        <BlogWrapper>
          <BlogTitleWrap>
            <BlogTitle>Recent Blog posts</BlogTitle>
          </BlogTitleWrap>
          {posts.map((post) => (
            <BlogList key={post.slug}>
              <BlogArticle>
                <BlogHeader>
                  <h2>
                    <BlogLink to={post.slug}>
                      <span>{post.title}</span>
                    </BlogLink>
                  </h2>
                  <small>{post.date}</small>
                </BlogHeader>
                <BlogSection>
                  <p
                    style={{ color: '#000' }}
                    dangerouslySetInnerHTML={{
                      __html: post.description || post.excerpt,
                    }}
                  />
                </BlogSection>
              </BlogArticle>
            </BlogList>
          ))}

        </BlogWrapper>
      </>
    </ThemeProvider>
  );
};
export default RecentBlogPosts;
