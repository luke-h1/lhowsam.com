import {
  Box, Container, Flex, Heading, Stack,
} from '@chakra-ui/react';
import React from 'react';
import { Project } from '../types/project';

interface ProjectProps {
  project: Project;
  children: React.ReactNode;
}

const ProjectLayout = ({ project, children }: ProjectProps) => {
  return (
    <>
      <Box
        h={1}
        as="div"
        bgGradient="linear(to-r, blue.200, gray.500)"
        position="sticky"
        top={0}
        zIndex={100}
        w="1%"
        transition="width .5s ease-in-out"
      />
      <Container>
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} mt={4} as="h1" size="2xl">
              {project.title}
            </Heading>
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
              mb={4}
            />
          </Flex>
          {children}
        </Stack>
      </Container>
    </>
  );
};
export default ProjectLayout;
