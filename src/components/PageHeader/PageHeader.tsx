import Balancer from 'react-wrap-balancer';
import Heading from '../Heading/Heading';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';
import * as styles from './PageHeader.css';

interface PageHeaderProps {
  heading: string;
  description?: string;
}

const PageHeader = ({ heading, description }: PageHeaderProps) => {
  return (
    <header className={styles.root}>
      <Heading as="h1" fontSize="xxxl">
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
    </header>
  );
};

export default PageHeader;
