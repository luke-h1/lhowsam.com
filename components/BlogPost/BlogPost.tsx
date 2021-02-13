import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { parseISO, format } from 'date-fns';



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

const BlogPost: FC<Iprops> = ({ title, slug, date }) => {
  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a>
          <article className="min-h-sm min-w-sm	 mt-4 mb-4 ">
            <Header>
              <h1>{title}</h1>
              <p>{format(parseISO(date), 'MMMM dd, yyyy')}</p>
            </Header>
            <hr style={{ color: '#DDDEDF' }} />
          </article>
        </a>
      </Link>
    </>
  );
};
export default BlogPost;
