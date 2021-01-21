import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BlogCard, CardTitle, CardBody, CardFinePrint, TitleWrap, BlogLink, BlogItemWrapper, Excerpt,
} from './BlogStyles';

const BlogItem: React.FC = (props) => {
  const theme = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <BlogItemWrapper>
          <BlogLink href={props.slug}>
            <BlogLink to={props.slug}>
              <TitleWrap>
                <CardTitle>{props.title}</CardTitle>
                <CardFinePrint>{props.date}</CardFinePrint>
              </TitleWrap>
              <BlogCard>
                <CardBody>
                  <Excerpt>{props.excerpt}</Excerpt>
                </CardBody>
              </BlogCard>
            </BlogLink>
          </BlogLink>
        </BlogItemWrapper>
      </>
    </ThemeProvider>
  );
};
export default BlogItem;
