import { PostMeta } from '@src/types/post';
import Link from 'next/link';
import React from 'react';

interface BlogPreviewProps {
  post: PostMeta;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ post }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="mt-1 text-gray-500 text-sm">
                {post.createdAt}
              </span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                {post.title}
              </h2>
              <p className="leading-relaxed">{post.description}</p>
              <Link href={`/blog/${post.slug}`}>
                <a className="m-5">
                  <p className="font-semibold title-font text-gray-700">
                    Read More
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogPreview;
