import Box from '../Box';
import { Heading } from '../Heading';
import Text from '../Text';
import * as styles from './PageHeader.css';

export interface PageHeaderProps {
  heading?: string;
  description?: string;
  id?: string;
}

const PageHeader = ({
  heading,
  description,
  id = 'pageHeader',
}: PageHeaderProps) => {
  if (!heading && !description) {
    return null;
  }

  return (
    <header className={styles.root}>
      <Box>
        <Heading as="h1" fontSize="xxl">
          {heading}
        </Heading>
        {description && (
          <Text
            fontSize="lg"
            color="foregroundNeutral"
            data-testid={`${id}-description`}
          >
            {description}
          </Text>
        )}
      </Box>
    </header>
  );
};

export default PageHeader;
