import { Project } from '@lhowsam/cms/types/schema';
import useHover from '@src/hooks/useHover';
import { AnchorUnstyled, ReadMorePrompt } from '@src/styles/blog';
import { Space } from '@src/styles/layouts';
import { Card } from '@src/styles/project';
import { BlogPostPreviewTitle, SmallText, Flex } from '@src/styles/typography';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <>
      <Card ref={hoverRef} data-testid={`project-${project.title}`}>
        <Link
          href={`/projects/${project.slug.current}`}
          passHref
          scroll
        >
          <AnchorUnstyled href={`/blog/${project.slug.current}`}>
            <BlogPostPreviewTitle {...{ isHovered }}>
              {project.title}
            </BlogPostPreviewTitle>
            <SmallText>{project.intro}</SmallText>
            <ReadMorePrompt {...{ isHovered }}>
              Read more{' '}
              {isHovered && <FaArrowRight style={{ fontSize: '12px' }} />}
            </ReadMorePrompt>
          </AnchorUnstyled>
        </Link>
        <Space size={25} />
        <Flex>
          {project.siteUrl && (
            <a
              href={project.siteUrl}
              aria-label="Deployed website"
              target="_blank"
              rel="noreferrer"
            >
              <CgWebsite fontSize="25px" />
            </a>
          )}
          <a
            href={project.githubUrl}
            aria-label="Github repo of project"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub fontSize="25px" />
          </a>
        </Flex>
      </Card>
    </>
  );
};
export default ProjectCard;
