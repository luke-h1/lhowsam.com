import { ElementType } from 'react';
import Box from '../Box';
import { Heading, HeadingProps } from '../Heading';
import Text from '../Text';
import * as styles from './PageHeader.css';

export interface PageHeaderProps {
  heading?: string;
  description?: string;
  id?: string;
  headerFontSize?: HeadingProps<ElementType>['fontSize'];
}

const PageHeader = ({
  heading,
  description,
  id = 'pageHeader',
  headerFontSize = 'xxl',
}: PageHeaderProps) => {
  if (!heading && !description) {
    return null;
  }

  return (
    <header className={styles.root}>
      <Box>
        <Heading as="h1" fontSize={headerFontSize}>
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
