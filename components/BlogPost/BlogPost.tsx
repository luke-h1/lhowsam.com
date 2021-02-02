import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { parseISO, format } from 'date-fns';

const Article = styled.article`
  height: 80px;
  width: 500px;
  margin: 2rem 0 2rem 0;
  @media (max-width: 450px) {
    width: 350px;
  }
  @media (min-width: 350px) {
    width: 350px;
  }
`;

const Header = styled.header`
  h1 {
    margin: 0 0 1rem 0;
    font-size: 22px;
  }
  p {
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: 1.6;
  }
`;

interface Iprops {
  title: string;
  summary: string;
  slug: string;
  date: string;
}

const BlogPost: FC<Iprops> = ({
  title, slug, date,
}) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Article>
            <Header>
              <h1>{title}</h1>
              <p>{format(parseISO(date), 'MMMM dd, yyyy')}</p>
            </Header>
            <hr style={{ color: '#DDDEDF' }} />
          </Article>
        </a>
      </Link>
    </>
  );
};
export default BlogPost;
