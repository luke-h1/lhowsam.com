import {
  Heading, Text, Flex, Box,
} from '@chakra-ui/react';
import { Project } from '@src/types/project';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Flex
      flexDir="column"
      transition="transform .5s ease-in-out, border .5s ease-in-out"
      borderRadius={5}
      border="2px solid transparent"
    >
      <Flex p={[5, 15, 25]} flexDir="column" justify="space-between" h="100%">
        <Box>
          <Heading as="h3" size="lg" fontWeight="semibold" mb={2}>
            {project.title}
          </Heading>
          <Box
            h={1}
            w="35%"
            bgColor="blue.500"
            transition="background-color .5s ease-in-out"
            mb={4}
          />
          <Text color="gray.400">{project.intro}</Text>
        </Box>
        <Flex justify="space-between" mt={2}>
          <Flex align="center">
            <a href={project.githubUrl}>Github link</a>
            {project.siteUrl && <a href={project.siteUrl}>Site link</a>}
          </Flex>
        </Flex>
        <Flex align="center">
          <Box w={3} h={3} mr={1} borderRadius="50%" />
          {/* tags here */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectCard;
