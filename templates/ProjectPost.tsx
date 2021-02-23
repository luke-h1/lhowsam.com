import { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import Github from '@icons/Github';
import Site from '@icons/Site';
import { Container, Flex, Text } from '@chakra-ui/react';

interface Iprops {
  children: any;
  frontMatter: any;
}

const ProjectPost: FunctionComponent<Iprops> = ({ children, frontMatter }) => {
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
            {frontMatter.github && <Github url={frontMatter.github} />}
            {frontMatter.site && <Site url={frontMatter.site} />}
          </Flex>
        </Flex>
        <Flex direction="column" justify="between" mt={2} mb={5}>
          <ShareButtons
            location={`https://lhowsam.com/blog/${frontMatter.slug}`}
          />
        </Flex>
        <Text as="p" fontSize="20px" mt={2} mb={2}>
          {' • '}
          {frontMatter.readingTime.text}
        </Text>
        <hr />
        <Text as="p" fontSize="20px" mt={2} mb={2} lineHeight="1.5">
          {children}
        </Text>
      </Container>
    </>
  );
};
export default ProjectPost;
