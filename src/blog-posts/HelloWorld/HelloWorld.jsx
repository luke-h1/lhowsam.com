/* eslint-disable react/react-in-jsx-scope */
import { Helmet } from 'react-helmet';
import BlogPostTemplate from '../../templates/BlogPostTemplate/BlogPostTemplate';

const HelloWorld = () => (
  <>
    <Helmet>
      <title>Blog - Hello World</title>
      <meta name="description" content="Home page" />
    </Helmet>
    <BlogPostTemplate
      title="Hello World"
      desc="Welcome to my new blog. This is about the 4th time I've attempted to create a decent looking blog page. I've only created this one blog post even after all of those attempts"
      desc3="My goal in creating a blog page is to write more about things I have learned, weird bugs I have encountered, new tools I try in my applications and various other things."
      date="20th November 2020"
    />
  </>
);
export default HelloWorld;
