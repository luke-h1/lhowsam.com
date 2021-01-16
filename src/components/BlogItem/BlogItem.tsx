import React from 'react';
import { theme } from '../../styles/Theme';
import { ThemeProvider } from 'styled-components';
import { BlogCard, CardTitle, CardBody, CardFinePrint,TitleWrap } from './BlogItemElements';
const BlogItem = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <TitleWrap>
          <CardTitle>Title</CardTitle>
          <CardFinePrint>DD/MM/YY</CardFinePrint>
        </TitleWrap>
        <BlogCard>
          <CardBody>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur est necessitatibus, ullam debitis provident perspiciatis
              ipsum voluptatibus odio exercitationem nisi cum non! Sequi ad corrupti error ex. Repudiandae, quaerat sequi.
            </p>
          </CardBody>
        </BlogCard>
      </>
    </ThemeProvider>
  );
};
export default BlogItem;
