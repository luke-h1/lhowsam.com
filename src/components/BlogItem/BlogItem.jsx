/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Title,
  BlogIntro,
  Intro,
  BlogSection,
  CardItem1,
  CardLink,
  CardFigure,
  CardImage,
  CardItemInfo,
  CardText,
} from './BlogItemElements';
import { Button } from '../utils/Buttons/Button/Button';
import { BlogData } from '../../data/BlogPostItemData';

const BlogItem = () => (
  <>
    <BlogSection>
      <BlogIntro>
        <Title>Blog</Title>
        <Intro>
          Candid thoughts about Javascript, React, Automation & other
          interesting things
        </Intro>
      </BlogIntro>
      {BlogData.map((post, i) => (
        <CardItem1 key={i}>
          <CardLink className="cards__item__link" to={post.slug}>
            <CardFigure data-category={post.label}>
              <CardImage src={post.image} alt={post.title} />
            </CardFigure>
            <CardItemInfo>
              <CardText>{post.title}</CardText>
              <CardText>
                {post.excerpt}
              </CardText>
              <Button to={post.slug}>
                Read More
              </Button>
            </CardItemInfo>
          </CardLink>
        </CardItem1>
      ))}
    </BlogSection>
  </>

);
export default BlogItem;
