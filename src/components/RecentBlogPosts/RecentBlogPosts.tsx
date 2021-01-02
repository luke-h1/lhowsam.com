import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
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

const RecentBlogPosts = ({ theme }) => {
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
                    // eslint-disable-next-line react/no-danger
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

RecentBlogPosts.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default RecentBlogPosts;
