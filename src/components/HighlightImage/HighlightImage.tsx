import { Heading } from '../Heading/Heading';
import { Image } from '../Image/Image';
import { Spacer } from '../Spacer/Spacer';
import Text from '../Text/Text';
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
        >
          {heading}
        </Heading>
        <Spacer height="xs" />
        <Text fontSize={{ md: 'lg' }} className={styles.description}>
          {description}
        </Text>
      </div>
    </div>
  );
};
export default HighlightImage;
