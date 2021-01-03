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

interface PostItem {
  slug: Number;
  date: Number;
  title: string;
  description?: string;
  excerpt?: string;
}

const RecentBlogPosts: React.FC<{theme: String}> = (props) => {
  const theme = props;
  const posts = usePosts();
  return (
    <ThemeProvider theme={theme}>
      <>
        <BlogWrapper>
          <BlogTitleWrap>
            <BlogTitle>Recent Blog posts</BlogTitle>
          </BlogTitleWrap>
          {posts.map((post: PostItem) => (
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



export default RecentBlogPosts;
