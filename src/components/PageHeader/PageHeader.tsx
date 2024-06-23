import Balancer from 'react-wrap-balancer';
import Heading from '../Heading/Heading';
import Spacer from '../Spacer/Spacer';
import Text from '../Text/Text';
import * as styles from './PageHeader.css';

interface Props {
  heading?: string;
  description?: string;
}

const PageHeader = ({ description, heading }: Props) => {
  return (
    <>
      <header className={styles.root}>
        <Heading as="h1" fontSize="xxxxl" color="foreground">
          {heading}
        </Heading>
      </header>
      {description && (
        <>
          <Spacer height="sm" />
          <Text fontSize="lg" color="gray">
            <Balancer>{description}</Balancer>
          </Text>
        </>
      )}
    </>
  );
};

export default PageHeader;
