import Box from '@frontend/components/Box/Box';
import Heading from '@frontend/components/Heading/Heading';
import Components from '@frontend/components/MDXComponents';
import Prose from '@frontend/components/Prose/Prose';
import Spacer from '@frontend/components/Spacer/Spacer';
import projectService from '@frontend/services/projectService';
import mdxToHtml from '@frontend/utils/mdxToHtml';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote';

interface Props {
  params: { slug: string };
}

const ProjectSlugPage = async ({ params }: Props) => {
  const project = await projectService.getProject(params.slug);

  if (!project) {
    notFound();
  }

  const { compiledSource } = await mdxToHtml(project.content);

  return (
    <article>
      <Box
        as="header"
        maxWidth="text"
        marginX="auto"
        textAlign={{ md: 'center' }}
      >
        <Heading
          fontSize="xxl"
          as="h1"
          style={{
            marginBottom: '1rem',
          }}
        >
          {project.title}
        </Heading>
        <Spacer height="sm" />
      </Box>
      <Spacer height="xxxl" />
      <Box maxWidth="text" marginX="auto">
        <Prose>
          <MDXRemote
            components={Components}
            compiledSource={compiledSource.compiledSource}
            scope={undefined}
            frontmatter={undefined}
          />
        </Prose>
      </Box>
    </article>
  );
};
export default ProjectSlugPage;
