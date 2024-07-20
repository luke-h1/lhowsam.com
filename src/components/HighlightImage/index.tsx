import { variables } from '@frontend/styles/variables.css';
import { Heading } from '../Heading';
import { Image } from '../Image';
import Link from '../Link';
import { Spacer } from '../Spacer';
import Text from '../Text';
import * as styles from './HighlightImage.css';

interface Props {
  heading: string;
  description: string;
}

const HighlightImage = ({ description, heading }: Props) => {
  return (
    <div className={styles.root}>
      <Image
        src="/dark-gradient.png"
        priority
        layout="fill"
        alt=""
        blurDataURL="/dark-gradient.png"
      />
      <span className={styles.overlay} />
      <div className={styles.content}>
        <Heading
          fontSize={{ sm: 'xxl', md: 'xxxl' }}
          className={styles.heading}
          data-testid="highlight-heading"
        >
          {heading}
        </Heading>
        <Spacer height="xs" />
        <Text
          fontSize={{ md: 'lg' }}
          className={styles.description}
          data-testid="highlight-description"
        >
          {description}
        </Text>
        <Link href="/about" css={{ marginTop: variables.spacing.lg }}>
          More about me
        </Link>
      </div>
    </div>
  );
};
export default HighlightImage;
