import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { parseISO, format } from 'date-fns';

const Article = styled.article`
  width: 500px;
  margin: 2rem 0 2rem 0;
  @media (max-width: 550px) {
    width: 400px;
  }
`;

const Header = styled.header`
  h1 {
    margin: 0 0 1rem 0;
  }
  p {
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const BlogPost = ({ title, summary, slug, date }) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Article>
            <Header>
              <h1>{title}</h1>
              <p>{summary}</p>
              <p>{format(parseISO(date), 'MMMM dd, yyyy')}</p>
            </Header>
            <hr style={{ color: '#eaeaea' }} />
          </Article>
        </a>
      </Link>
    </>
  );
};
export default BlogPost;
