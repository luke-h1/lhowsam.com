import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorMode,
  Link as ChakraLink,
  Tag,
} from '@chakra-ui/react';

import { Project } from '@src/types/project';
import React from 'react';
import Link from 'next/link';
import { GitHubIcon } from './Icons';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Link href={`/projects/${project.slug}`}>
      <ChakraLink w="100%" _hover={{ textDecoration: 'none' }}>
        <Flex
          flexDir="column"
          _hover={{ transform: 'scale(1.05)' }}
          transition="transform 0.5s ease-in-out, border 0.5s ease-in-out"
          borderRadius={10}
          border={`2px solid ${colorMode === 'light' ? '#000' : '#fff'}`}
          cursor="pointer"
        >
          <Flex
            p={[5, 15, 25]}
            flexDir="column"
            justify="space-between"
            h="100%"
          >
            <Box>
              <Heading as="h3" size="lg" fontWeight="semibold" mb={2}>
                {project.title}
              </Heading>
              <Box h={1} w="35%" mb={4} />
              <Text>{project.intro}</Text>
              {project.tech
                && project.tech.map((item) => (
                  <Tag m={2} textAlign="left">
                    {item}
                  </Tag>
                ))}
            </Box>
            <Flex justify="space-between" mt={2}>
              <Flex align="center">
                <a href={project.githubUrl} rel="noreferrer noopener">
                  <Button leftIcon={<GitHubIcon />} variant="ghost" />
                </a>
                {project.siteUrl && (
                  <a href={project.githubUrl} rel="noreferrer noopener">
                    <Button leftIcon={<ExternalLinkIcon />} variant="ghost" />
                  </a>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ChakraLink>
    </Link>
  );
};

export default ProjectCard;
