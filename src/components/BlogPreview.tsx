import { PostMeta } from '@src/types/post';
import Link from 'next/link';
import React from 'react';

interface BlogPreviewProps {
  post: PostMeta;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <a>
        <section className="text-gray-600 body-font" key={post.slug}>
          <div className="container px-5 py-4 mx-auto">
            <div className="">
              <div className="p-4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  {post.image && (
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={`/blog-images/${post.image}`}
                      alt={post.image}
                    />
                  )}
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-600 mb-1">
                      {post.createdAt}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {post.title}
                    </h1>
                    <p className="leading-relaxed mb-3">{post.description}</p>
                    <div className="flex items-center flex-wrap" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </a>
    </Link>
  );
};
export default BlogPreview;
