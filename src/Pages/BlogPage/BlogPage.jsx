import React from 'react';
import BlogItem from '../../components/BlogItem/BlogItem';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const BlogPage = () => (
  <>
      <Helmet>
      <title>Blog</title>
      <meta name="description" content="Blog page" />
    </Helmet>
    <Navbar />
    <BlogItem />
    <Footer />
  </>
);
export default BlogPage;
