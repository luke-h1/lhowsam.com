import Link from 'next/link';
import Box from '../Box/Box';
import Heading from '../Heading/Heading';
import List from '../List/List';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';

const links: { id: number; href: string; text: string }[] = [
  {
    id: 1,
    href: 'https://github.com/luke-h1',
    text: 'Github',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/lukehowsam',
    text: 'LinkedIn',
  },
  {
    id: 3,
    href: 'mailto:luke.howsam@yahoo.com',
    text: 'Email',
  },
];

const Connect = () => {
  return (
    <Box
      as="section"
      maxWidth="text"
      marginX="auto"
      display="flex"
      justifyContent="flex-start"
      flexDirection="column"
    >
      <header>
        <Heading fontSize="xl">Connect</Heading>
      </header>
      <Spacer height="xxl" />
      <List>
        {links &&
          links.map(link => (
            <List.Item key={link.id}>
              <Text>
                <Link href={link.href}>{link.text}</Link>
              </Text>
            </List.Item>
          ))}
      </List>
    </Box>
  );
};
export default Connect;
