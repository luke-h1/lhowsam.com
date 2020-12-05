/* eslint-disable */
import React from "react"
import { Link } from 'gatsby';
import {
  BlogPost,
  BlogTitle,
  BlogDate,
  BlogExcerpt
} from './BlogPostPreviewElements';


const BlogPostPreview = ({ post }) => (
  <>
    <BlogPost key={post.id} to={post.slug}>
      <BlogTitle>{post.title}</BlogTitle>
      <BlogDate>{post.date}</BlogDate>
      <BlogExcerpt>{post.excerpt}</BlogExcerpt>
    </BlogPost>
  </>
)
export default BlogPostPreview
