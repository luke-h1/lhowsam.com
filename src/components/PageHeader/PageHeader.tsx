import Balancer from 'react-wrap-balancer';
import Box from '../Box/Box';
import { Heading } from '../Heading/Heading';
import { Spacer } from '../Spacer/Spacer';
import { Text } from '../Text/Text';
import * as styles from './PageHeader.css';

interface Props {
  heading: string;
  description?: string;
}

const PageHeader = ({ heading, description }: Props) => {
  return (
    <header className={styles.root}>
      <Box maxWidth="md" marginX="auto">
        <Heading as="h1" fontSize="xxl">
          {heading}
        </Heading>
        {description && (
          <>
            <Spacer height="sm" />
            <Text fontSize="lg" color="foregroundNeutral">
              <Balancer>{description}</Balancer>
            </Text>
          </>
        )}
      </Box>
    </header>
  );
};

export default PageHeader;
