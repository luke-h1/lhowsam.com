import Heading from '../Heading/Heading';
import styles from './Error.module.scss';

interface Props {
  name: string;
  description: string;
}

const Error = ({ description, name }: Props) => {
  return (
    <main className={styles.container}>
      <Heading className={styles.heading} as="h1" variant="primary">
        {name}
      </Heading>
      <div className={styles.wrapper}>
        <p className={styles.text}>{description}</p>
      </div>
    </main>
  );
};
export default Error;
