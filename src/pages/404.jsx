/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Button } from '../utils/Buttons/Button';
import { NotFoundWrapper } from '../styles/404';

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title="404: Not Found" />
      <NotFoundWrapper>
        <h1>404: Not Found</h1>
        <p style={{ fontSize: '25px' }}>You just hit a route that doesn&#39;t exist...</p>
        <span
          style={{ fontSize: '35px' }}
          role="img"
          aria-label="Thinking Emoji"
        >
          🤔
        </span>
        <Button round="true" background="primary" to="/">Go Home</Button>
      </NotFoundWrapper>
      {' '}

    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
