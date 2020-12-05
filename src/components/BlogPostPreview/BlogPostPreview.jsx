/* eslint-disable */
import React from "react"
const BlogPostPreview = ({ post }) => (
  <>
    <BlogPost key={post.id} to={post.slug}>
      <BlogTitle>{post.title}</BlogTitle>
      <BlogDate>{post.postedAt}</BlogDate>
      <BlogExcerpt>{post.excerpt}</BlogExcerpt>
    </BlogPost>
  </>
)
export default BlogPostPreview
