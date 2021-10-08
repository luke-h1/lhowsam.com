import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { Post } from '@src/types/post';
import styles from '@src/styles/blog.module.scss';
import BlogItem from '@src/components/BlogItem';
import { getAllItems } from '@src/utils/mdx';

interface Props {
  posts: Post[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <>
      <motion.h1
        transition={{ duration: 0.3 }}
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
      >
        Blog Posts
      </motion.h1>
      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ translateY: 15, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className={styles.blogItems}
      >
        {posts
          && posts.map((post) => {
            return <BlogItem type="blog" post={post} key={post.slug} />;
          })}
      </motion.div>
    </>
  );
};
export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllItems<Post>('posts');
  return {
    props: {
      posts,
    },
  };
};
