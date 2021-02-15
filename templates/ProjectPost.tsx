import { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import Github from '@icons/Github';
import Site from '@icons/Site';
import StyledContainer from './StyledContainer';

interface Iprops {
  children: any;
  frontMatter: any;
}

const ProjectPost: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  return (
    <>
      <NextSeo
        title={`${frontMatter.title} | lhowsam.com`}
        canonical={`https://lhowsam.com/projects/${frontMatter.slug}`}
        openGraph={{
          url: `https://lhowsam.com/projects/${frontMatter.slug}`,
          title: `${frontMatter.title} | lhowsam.com`,
        }}
      />
      <StyledContainer>
        <main>
          <header>
            <h1 className="mb-7 mt-14 text-5xl font-black">
              {frontMatter.title}
            </h1>

            <p className="leading-7 mb-7 -mt-1">{frontMatter.date}</p>

            {frontMatter.readingTime.text}
            <br />
            <br />
            <ShareButtons
              location={`https://lhowsam.com/projects/${frontMatter.slug}`}
            />
            <div className="flex flex-row align-left items-left mb-2">
              {frontMatter.github && <Github url={frontMatter.github} />}
              {frontMatter.site && <Site url={frontMatter.site} />}
            </div>
            <hr />
          </header>
          <article className="markdown prose">{children}</article>
        </main>
      </StyledContainer>

    </>
  );
};
export default ProjectPost;
