import React from 'react';
import { theme } from '../../styles/Theme';
import { ThemeProvider } from 'styled-components';
import { BlogCard, CardTitle, CardBody, CardFinePrint, TitleWrap,BlogLink } from './BlogItemElements';
const BlogItem = props => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <BlogLink to={props.slug}>
          <TitleWrap>
            <CardTitle>{props.title}</CardTitle>
            <CardFinePrint>{props.date}</CardFinePrint>
          </TitleWrap>
          <BlogCard>
            <CardBody>
              <p>{props.description}</p>
            </CardBody>
          </BlogCard>
        </BlogLink>
      </>
    </ThemeProvider>
  );
};
export default BlogItem;
