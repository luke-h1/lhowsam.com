import React, { FC } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';

interface Iprops {
  title: string;
  summary: string;
  slug: string;
  date: string;
}

const Article = styled.article`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1rem 0;
  @media(max-width: 500px){
    min-width: 350px;
  }
  header {
    min-width: 500px;
    h2 {
      font-weight: 300;
      margin-bottom: 2rem;
      font-size: 26px;
    }
    p {
      margin: 1rem 0 1rem 0;
      line-height: 1.6;
    }
  }
`;

const BlogPost: FC<Iprops> = ({ title, slug, date }) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <Article>
            <header>
              <h2>{title}</h2>
              <p>{format(parseISO(date), 'MMMM dd, yyyy')}</p>
            </header>
            <hr style={{ color: '#DDDEDF' }} />
          </Article>
        </a>
      </Link>
    </>
  );
};
export default BlogPost;
