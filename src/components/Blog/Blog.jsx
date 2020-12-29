/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePosts from '../../hooks/usePosts';
import SEO from '../seo';
import {
  BlogArticle,
  BlogContainer,
  BlogFlex,
  BlogHeader,
  BlogIntro,
  BlogList,
  BlogLink,
  BlogSection,
} from './BlogElements';

const Blog = ({ theme }) => {
  const posts = usePosts();
  return (
    <ThemeProvider theme={theme}>
      <>
      <SEO title="Blog" />

        <BlogContainer>
          <BlogIntro>
            <h1>Blog</h1>
          </BlogIntro>
        </BlogContainer>
        <BlogFlex>
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
        </BlogFlex>
      </>
    </ThemeProvider>
  );
};
export default Blog;
