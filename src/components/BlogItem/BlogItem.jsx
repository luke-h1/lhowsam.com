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
  PostedAt,
  BlogWrapper,
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
      <BlogWrapper>
        {BlogData.map((post) => (
          <CardItem1 key={post.id}>
            <CardLink className="cards__item__link" to={post.slug}>
              <CardFigure data-category={post.label}>
                <CardImage src={post.image} alt={post.title} />
              </CardFigure>
              <CardItemInfo>
                <CardText>{post.title}</CardText>
                <CardText>{post.excerpt}</CardText>
                <Button to={post.slug}>Read More</Button>
                <PostedAt>
                  <p>{post.postedAt}</p>
                </PostedAt>
              </CardItemInfo>
            </CardLink>
          </CardItem1>
        ))}
      </BlogWrapper>
    </BlogSection>
  </>
);
export default BlogItem;
