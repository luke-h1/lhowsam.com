import React, { FC } from 'react';
import Link from 'next/link';
import { Card } from './ProjectCardStyles';

interface Iprops {
  title: string;
  summary: string;
  slug: string;
}

const ProjectCard: FC<Iprops> = ({
  title, summary, slug,
}) => {
  return (
    <>
      <Link href={`/projects/${slug}`}>
        <a>
          <Card>
            <h3>{title}</h3>
            <p>{summary}</p>
          </Card>
        </a>
      </Link>
    </>
  );
};
export default ProjectCard;
