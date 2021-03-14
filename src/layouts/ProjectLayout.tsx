import { FunctionComponent, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import {
  Container, Flex, Text, useColorMode,
} from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
import { GoBrowser } from 'react-icons/go';

interface Iprops {
  children: any;
  frontMatter: any;
}

const ProjectLayout: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
  useEffect(() => {
    console.log('children > ', children);
    console.log('frontMatter > ', frontMatter);
  }, []);
  const { colorMode } = useColorMode();
  const Colors = {
    light: '#000',
    dark: '#fff',
  };
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
            {' '}
            {typeof children}
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Container mb={4}>
        <NextSeo
          title={`${frontMatter.title} | lhowsam.com`}
          canonical={`https://lhowsam.com/projects/${frontMatter.slug}`}
          openGraph={{
            url: `https://lhowsam.com/projects/${frontMatter.slug}`,
            title: `${frontMatter.title} | lhowsam.com`,
          }}
        />

        <Flex
          as="article"
          direction="column"
          justify="center"
          maxW="1000px"
          mx="auto"
          mb={5}
        >
          <Text as="h1" fontSize="40px" mb={2}>
            {frontMatter.title}
          </Text>
          <Flex direction="row" justify="left">
            <a
              href={frontMatter.github}
              target="_blank"
              rel="noreferrer"
              style={{ marginRight: '35px' }}
              color={Colors[colorMode]}
            >
              <FiGithub />
            </a>
            {frontMatter.site && (
              <a
                href={frontMatter.site}
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: '35px' }}
                color={Colors[colorMode]}
              >
                <GoBrowser />
              </a>
            )}
          </Flex>
        </Flex>
        <hr />
        <Text as="p" fontSize="20px" mt={2} mb={2} lineHeight="1.5">
          {children}
        </Text>
        <ShareButtons
          location={`https://lhowsam.com/blog/${frontMatter.slug}`}
        />
      </Container>
    </>
  );
};
export default ProjectLayout;
