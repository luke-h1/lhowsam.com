/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Title,
  Intro,
  Blog,
  BlogLink,
  BlogLinkWrap,
} from './BlogPostTemplateElements';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const BlogPostTemplate = (props) => {
  const {
    title, date, desc, desc2, desc3,
  } = props;
  return (
    <>
      <Navbar />
      <Wrapper>
        <Title>{title}</Title>
        <Intro>{date}</Intro>
        <Blog />
        <Blog>{desc}</Blog>
        <Blog>{desc2}</Blog>
        <Blog>{desc3}</Blog>
        <BlogLinkWrap>
          <BlogLink to="/blog">Back to Blog</BlogLink>
          <BlogLink to="/">Back to Home</BlogLink>
        </BlogLinkWrap>
      </Wrapper>
      <Footer />
    </>
  );
};

BlogPostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BlogPostTemplate;
