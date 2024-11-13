import { buttonStyles } from '@frontend/styles/button.css';
import featureFlags from '@frontend/utils/featureFlags';
import Image from 'next/image';
import ButtonGroup from '../ButtonGroup';
import Link from '../Link';
import Spacer from '../Spacer';
import Text from '../Text';
import * as styles from './Intro.css';

export default function Intro() {
  const newJobEnabled = featureFlags.find(f => f.name === 'newJob')?.enabled;

  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <Image
          src="/luke-1.png"
          width="200"
          height="200"
          alt="Headshot"
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
          Software Engineer interested in DevOps, React, Python, TypeScript and
          AWS.{' '}
          {newJobEnabled &&
            'Currently working at Ostrom, helping build and maintain a better way of managing energy in Germany'}
        </Text>

        <Spacer height="xl" />

        <ButtonGroup>
          <Link
            href="/static/cv.pdf"
            className={buttonStyles({ type: 'highContrast' })}
            testId="read-cv"
          >
            Read CV
          </Link>
          <Link
            href="/about#experience"
            scroll
            className={buttonStyles({ type: 'outlined' })}
            testId="view-experience"
          >
            View experience
          </Link>
        </ButtonGroup>
      </div>
    </header>
  );
}
