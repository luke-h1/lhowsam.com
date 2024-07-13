import Balancer from 'react-wrap-balancer';
import Box from '../Box/Box';
import { Heading } from '../Heading/Heading';
import Text from '../Text/Text';
import * as styles from './PageHeader.css';

export interface PageHeaderProps {
  heading?: string;
  description?: string;
}

const PageHeader = ({ heading, description }: PageHeaderProps) => {
  if (!heading && !description) {
    return null;
  }

  return (
    <header className={styles.root}>
      <Box maxWidth="container">
        <Heading as="h1" fontSize="xxl">
          {heading}
        </Heading>
        {description && (
          <Text fontSize="lg" color="foregroundNeutral">
            <Balancer>{description}</Balancer>
          </Text>
        )}
      </Box>
    </header>
  );
};

export default PageHeader;
