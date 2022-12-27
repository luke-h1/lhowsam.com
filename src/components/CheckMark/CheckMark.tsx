import { Variant } from '@frontend/types/mdx';
import classNames from 'classnames';
import CheckMarkIcon from '../../../public/icons/check-mark.svg';
import styles from './CheckMark.module.scss';

interface Props {
  variant: Variant;
}

const CheckMark = ({ variant }: Props) => {
  return (
    <span
      aria-hidden="true"
      className={classNames(styles.wrapper, styles[variant])}
    >
      <CheckMarkIcon />
    </span>
  );
};
export default CheckMark;
