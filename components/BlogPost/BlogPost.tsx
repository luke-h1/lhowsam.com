import React, { FC } from 'react';
import Link from 'next/link';
import { parseISO, format } from 'date-fns';


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
          <article className="min-h-sm min-w-sm	 mt-6 mb-6 ">
            <header>
              <h1 className="mb-7 text-2xl text-bold">{title}</h1>
              <p className="text-1xl mt-1 mb-1 line-height-2">{format(parseISO(date), 'MMMM dd, yyyy')}</p>
            </header>
            <hr style={{ color: '#DDDEDF' }} />
          </article>
        </a>
      </Link>
    </>
  );
};
export default BlogPost;
