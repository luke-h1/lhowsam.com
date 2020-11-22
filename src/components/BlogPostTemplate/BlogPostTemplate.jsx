import React from 'react';
import {
  Wrapper,
  Title,
  Intro,
  Blog,
  BlogLink,
  BlogLinkWrap,
} from './BlogPostTemplateElements';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const BlogPostTemplate = (props) => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>{props.title}</Title>
        <Intro>{props.date}</Intro>
        <Blog></Blog>
        <Blog>{props.desc}</Blog>
        <Blog>{props.desc2}</Blog>
        <Blog>{props.desc3}</Blog>
        <BlogLinkWrap>
          <BlogLink to="/blog">Back to Blog</BlogLink>
          <BlogLink to="/">Back to Home</BlogLink>
        </BlogLinkWrap>
      </Wrapper>

      <Footer />
    </>
  );
};
export default BlogPostTemplate;
