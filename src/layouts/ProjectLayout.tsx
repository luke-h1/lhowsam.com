import { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import ShareButtons from '@src/components/ShareButtons';
import { ProjectPost } from '@src/types';
import { Browser, Github } from '@src/Icons/Social';
import { CustomHead } from '@src/components/CustomHead';

interface Iprops {
  children: React.ReactNode;
  frontMatter: ProjectPost;
}

const ProjectLayout: FunctionComponent<Iprops> = ({
  children,
  frontMatter,
}) => {
  if (!children || !frontMatter) {
    return (
      <div>
        <p>
          Frontmatter is:
          {typeof frontMatter}
        </p>
        <div>
          <p>
            children is
            {typeof children}
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <CustomHead
        title={`Projects | ${frontMatter.title}`}
        description={`${frontMatter.summary}`}
        image={`${frontMatter.ogImage && frontMatter.ogImage}`}
      />

      <div className="max-w-lg w-full p-2 min-h-screen h-full">
        <NextSeo
          title={`${frontMatter.title}`}
          canonical={`https://lhowsam.com/projects/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/projects/${frontMatter.slug}`,
            title: `${frontMatter.title}`,
          }}
        />
        <article className="flex flex-col max-w-lg w-full mx-0 mb-5">
          <h1 className="text-3xl dark:text-gray-300">{frontMatter.title}</h1>
          <div className="flex flex-row mt-5 dark:text-gray-300">
            <a
              href={frontMatter.github}
              target="_blank"
              rel="noreferrer"
              style={{
                marginRight: '35px',
                marginTop: '35px',
                marginBottom: '35px',
              }}
            >
              <Github />
            </a>
            {frontMatter.site && (
              <a
                href={frontMatter.site}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginRight: '35px',
                  marginTop: '35px',
                  marginBottom: '35px',
                }}
              >
                <Browser />
              </a>
            )}
          </div>
        </article>
        <hr />
        <div className="prose dark:prose-dark max-w-none w-full">
          <p className="text-lg mt-4 mb-4 leading-10 tracking-wider dark:text-gray-300 prose dark:prose-dark max-w-none w-full">
            {children}
          </p>
        </div>
        <div className="flex flex-col align-center items-center">
          <ShareButtons
            location={`https://lhowsam.com/projects/${frontMatter.slug}`}
          />
        </div>
      </div>
    </>
  );
};
export default ProjectLayout;
