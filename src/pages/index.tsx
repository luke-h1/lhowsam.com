import BlogCard from '@/components/BlogCard';
import { CustomHead } from '@/components/CustomHead';
import ProjectCard from '@/components/ProjectCard';
import Wrapper from '@/components/Wrapper';
import { BlogPost, ProjectPost } from '@/types/md';
import { getAllFilesFrontmatter } from '@/utils/mdx';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const Home = ({
  posts,
  projects,
}: {
  posts: BlogPost[];
  projects: ProjectPost[];
}) => {
  // @ts-expect-error
  const filterPosts = posts.sort((a, b) => Number(new Date(b.date) - Number(new Date(a.date))));
  return (
    <>
      <CustomHead title="Home | lhowsam.com" description="Homepage" />
      <NextSeo
        title="Home"
        canonical="https://lhowsam.com/"
        openGraph={{
          url: 'https://lhowsam.com',
          title: 'Home',
        }}
      />
      <Wrapper>
        <div className="h-6" />
        <h1 className="text-4xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
          Hi, I'm Luke 👋
        </h1>
        <div className="align-left mb-5">
          <p
            className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300"
            data-testid="i-intro-1"
          >
            I am a software tester who loves to work on big projects where I can
            grow interpersonally & technically.
            {' '}
          </p>
          <p
            className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300"
            data-testid="i-intro-2"
          >
            I have experience working in agile environments, testing features
            end to end, various frontend languages, technologies & tooling.
          </p>
          <p
            className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300"
            data-testid="i-intro-2"
          >
            At the moment I enjoy working with React, GraphQL, SQL, Cypress &
            Styled Components
          </p>
          <p
            className="md:leading-10 text-1xl tracking-md text-left text-gray-700 mr-2 sm:text-md ml-4 leading-10 mb-4 dark:text-gray-300"
            data-testid="i-intro-3"
          >
            In my spare time I work on open source projects that typically use
            React, Next, Graphql, Express & Node. You can check out some of my
            open source projects
            {' '}
            <Link href="/projects" passHref>
              <a
                className="text-black hover: underline dark:text-white"
                aria-label="projects"
              >
                here
              </a>
            </Link>
            <hr className="text-black dark:text-white border border-solid" />
          </p>
        </div>
        <div className="max-w-lg w-full align-left mb-8 ">
          <h1 className="text-3xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-3">
            Blog
          </h1>
          {filterPosts.map((frontMatter) => (
            <BlogCard {...frontMatter} key={frontMatter.slug} />
          ))}
        </div>
        <div className="max-w-lg w-full align-left ">
          <h1 className="text-3xl text-left md:leading-10 tracking-wide text-gray-700 mr-2 sm:text-md ml-4 leading-10 dark:text-gray-300 font-bold mb-5">
            Projects
          </h1>
          {projects.map((frontMatter) => (
            <ProjectCard {...frontMatter} key={frontMatter.slug} />
          ))}
        </div>
        {' '}
      </Wrapper>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllFilesFrontmatter('blog');
  const projects = await getAllFilesFrontmatter('project');

  return { props: { posts, projects } };
};
