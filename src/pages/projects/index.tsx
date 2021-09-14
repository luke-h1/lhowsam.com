import { CustomHead } from '@src/components/CustomHead';
import { Projects } from '@src/data/projects';
import { NextSeo } from 'next-seo';
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <>
      <CustomHead title="Projects | lhowsam.com" description="Projects" />
      <NextSeo
        title="Projects"
        canonical="https://lhowsam.com/projects"
        openGraph={{
          url: 'https://lhowsam.com/projects',
          title: 'Projects',
        }}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-4 mx-auto mt-24">
          <h1 className="text-4xl font-extrabold text-gray-800">Projects</h1>

          {Projects
            && Projects.map((project) => (
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <h2
                  className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5"
                  data-testid="project-title"
                >
                  {project.title}
                </h2>
                <div className="md:w-3/5 md:pl-6">
                  <p className="leading-relaxed text-base">
                    {project.description}
                  </p>
                  <div className="flex md:mt-4 mt-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer"
                    >
                      <AiOutlineGithub fontSize="30px" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer"
                      className="ml-5"
                    >
                      {project.siteUrl && (
                        <a
                          href={project.siteUrl}
                          referrerPolicy="no-referrer"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <CgWebsite fontSize="30px" />
                        </a>
                      )}
                    </a>
                  </div>
                  <div className="flex flex-wrap align-left text-left">
                    {project.tech
                      && project.tech.map((tech) => (
                        <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest m-3">
                          {tech}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
export default Index;
