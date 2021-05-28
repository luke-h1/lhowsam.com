import React, { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import { ProjectPost } from '@src/types/md';
import { CustomHead } from '@src/components/CustomHead';
import { Browser, Github } from '@src/Icons/Social';
import Wrapper from '@src/components/Wrapper';
import { Flex, Text } from '@chakra-ui/react';

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

      <Wrapper>
        <NextSeo
          title={`${frontMatter.title}`}
          canonical={`https://lhowsam.com/projects/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/projects/${frontMatter.slug}`,
            title: `${frontMatter.title}`,
          }}
        />
        <Flex as="div" direction="column" mx={0} mb={3}>
          <Text as="h1" fontSize="30px">
            {frontMatter.title}
          </Text>
          <Flex
            mt={2}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
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
          </Flex>
        </Flex>
        <hr className="underline" />
        <Text as="p" mt={4} lineHeight={10} fontSize="18px" maxW="70%">
          {children}
        </Text>
      </Wrapper>
    </>
  );
};
export default ProjectLayout;
