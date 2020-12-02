/* eslint-disable */
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
  BlogPostWrapper,
} from './BlogPostTemplateElements';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { ThemeProvider } from 'styled-components';
import { useDarkTheme } from '../../hooks/useDarkMode';
import {lightTheme, darkTheme} from '../../styles/Themes';

const BlogPostTemplate = (props) => {
  const {
    title, date, desc, desc2, desc3,
  } = props;

  const [theme, setTheme] = useDarkTheme(
    (typeof window !== 'undefined' && window.localStorage.getItem('theme')) || 'light',
  );

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

    <>
      <Navbar theme={theme} toggleTheme={themeToggler}/>
      <BlogPostWrapper>
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
      </BlogPostWrapper>
      <Footer theme={theme} />
    </>
    </ThemeProvider>

  );
};

BlogPostTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BlogPostTemplate;
