/* eslint-disable */
import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import {
  BlogWrapper,
  BlogList,
  BlogArticle,
  BlogHeader,
  BlogLink,
  BlogSection,
  BlogTitle,
  BlogTitleWrap,
} from "./RecentBlogPostsElements"
import { ThemeProvider } from 'styled-components';
import usePosts from "../../hooks/usePosts";

const RecentBlogPosts = ({theme, data}) => {
  const posts = usePosts();
  return (
    <ThemeProvider theme={theme}>
    <>
      <BlogWrapper>
        <BlogTitleWrap>
        <BlogTitle>Recent Blog posts</BlogTitle>
        </BlogTitleWrap>
        {posts.map((post) =>  (
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
                  dangerouslySetInnerHTML={{
                    __html: post.description|| post.excerpt,
                  }}
                ></p>
              </BlogSection>
            </BlogArticle>
           </BlogList>
        ))}
           
      </BlogWrapper>
      </>
    </ThemeProvider>
  )
}
export default RecentBlogPosts