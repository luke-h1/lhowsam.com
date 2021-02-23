import React from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps, NextPage } from 'next';
import Intro from '@components/Intro/Intro';
import { getAllFilesFrontmatter } from '@lib/mdx';
import { theme } from '@styles/Theme';
import { ThemeProvider } from '@emotion/react';
import Card from '@components/Card';
import Project from '../types/Project';
import Blog from '../types/Blog';

interface Iprops {
  posts: Blog;
  projects: Project;
  theme: any;
}

const Home: NextPage<Iprops> = ({ posts, projects }) => {
  const filterPosts = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <NextSeo
          title="Home | lhowsam.com"
          canonical="https://lhowsam.com/"
          openGraph={{
            url: 'https://lhowsam.com',
            title: 'Home | lhowsam.com',
          }}
        />
        <Intro theme={theme} />
        <h1 className="mt-1 ml-0 mb-6 mr-0 text-center font-bold">
          Recent Projects
        </h1>

        <div className="flex flex-col justify-center items-center mb-8 ml-0 mr-0 mt-0">
          {projects.map((frontMatter) => (
            <Card key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
        <h1 className="mt-1 ml-0 mb-6 mr-0 text-center font-bold">
          Recent Blog Posts
        </h1>
        <div className="flex flex-col justify-center items-center mb-4 ml-0 mr-0 mt-0">
          {filterPosts.map((frontMatter) => (
            <BlogCard key={frontMatter.title} {...frontMatter} />
          ))}
        </div>
      </ThemeProvider>
    </>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');
  return { props: { posts, projects } };
};
export default Home;
