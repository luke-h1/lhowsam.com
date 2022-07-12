import QuoteIcon from '../../../../public/svg/quote.svg';
import styles from './Quote.module.scss';

interface Props {
  text: string;
  author: string;
}
const Quote = ({ author, text }: Props) => {
  return (
    <blockquote className={styles.quote}>
      <div className={styles.icon}>
        <QuoteIcon />
      </div>
      <p className={styles.text}>{text}</p>
      <p className={styles.author}>{author}</p>
    </blockquote>
  );
};

export default Quote;
