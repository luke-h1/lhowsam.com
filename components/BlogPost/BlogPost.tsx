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
  @media (max-width: 550px) {
    max-width: 350px !important;
    text-align: center;
  }
  header {
    min-width: 500px;
    @media (max-width: 550px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h2 {
      font-weight: 300;
      margin-bottom: 2rem;
      font-size: clamp(16px, 7vw, 26px);
      @media (max-width: 550px) {
        max-width: 70%;
        text-align: center;
        margin: 0 auto;
      }
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
