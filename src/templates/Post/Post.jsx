/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from '../../components/utils/ReadLink/ReadLink';
const PostArticle = styled.article`
  margin-top: 0;
  padding-bottom: 1rem;
  :first-of-type{
    margin-top: 1rem;
  }
`;

const PostWrap = styled.div`
  padding: 0.2rem;
`;

const PostLink = styled(Link)`
  margin: 1rem 1rem 0 0;
  width: 100px;
`;

const PostImage = styled(Image)`
     max-height: 200px;
    border-radius: 10px;
    margin-top: 0;

  * {
    margin-top: 0;
  }
`;

const PostIntro = styled.p`
  font-size: 18px;
`;

const Post = ({ post }) => (
  <>
    <PostArticle>
      <PostWrap>
        <PostLink to={post.slug}>
          <PostImage fluid={post.image.sharp.fluid} alt={post.title} />
        </PostLink>
        <h3>
          <PostLink to={post.slug}>{post.title}</PostLink>
        </h3>
      <PostIntro>{post.excerpt}</PostIntro>
      <ReadLink to={post.slug}>Read This Post</ReadLink>
      </PostWrap>
    </PostArticle>
  </>
);
