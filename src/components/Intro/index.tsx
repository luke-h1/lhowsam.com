import { buttonStyles } from '@frontend/styles/button.css';
import Image from 'next/image';
import ButtonGroup from '../ButtonGroup';
import Link from '../Link';
import Spacer from '../Spacer';
import Text from '../Text';
import * as styles from './Intro.css';

export default function Intro() {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          src="/luke-1.png"
          width="200"
          height="200"
          alt="Headshot"
          placeholder="blur"
          blurDataURL="/luke-1.png"
          priority
          loading="eager"
          fetchPriority="high"
          quality={100}
          className={styles.image}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div className={styles.textContainer}>
        <Text
          fontSize={{ xs: 'lg', md: 'xl' }}
          gradient
          fontFamily="mono"
          testId="intro-heading"
        >
          SWE interested in React Native, Mobile, DevOps, TypeScript and all
          things in-between
        </Text>

        <Spacer height="xl" />

        <ButtonGroup>
          <Link
            href="/static/cv.pdf"
            className={buttonStyles({ type: 'highContrast' })}
            testId="read-cv"
            prefetch={false}
          >
            Read CV
          </Link>
          <Link
            href="/about#experience"
            scroll
            className={buttonStyles({ type: 'outlined' })}
            testId="view-experience"
            prefetch={false}
          >
            View experience
          </Link>
        </ButtonGroup>
      </div>
    </header>
  );
}
