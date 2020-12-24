/* eslint-disable */
import React from "react"
import usePosts from '../../hooks/RecentBlog';
import {
  BlogWrapper,
  BlogList,
  BlogArticle,
  BlogHeader,
  BlogLink,
  BlogSection,
} from "./RecentBlogPostsElements"
import { ThemeProvider } from 'styled-components';

const RecentBlogPosts = ({theme}) => {
  const post = usePosts();
  return (
    <ThemeProvider theme={theme}>
    <>
      <BlogWrapper>
           <BlogList key={post.slug}>
            <BlogArticle>
              {post.title}
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
                  dangerouslySetInnerHTML={{
                    __html: post.description|| post.excerpt,
                  }}
                ></p>
              </BlogSection>
            </BlogArticle>
           </BlogList>
      </BlogWrapper>
      </>
    </ThemeProvider>
  )
}
export default RecentBlogPosts