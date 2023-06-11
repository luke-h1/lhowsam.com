import { ReactNode } from 'react';
import s from './PageHeader.module.scss';

interface Props {
  title: string | ReactNode;
  description?: string | ReactNode;
  children?: ReactNode;
  compact?: boolean;
}

const PageHeader = ({ title, children, compact, description }: Props) => {
  return (
    <div className={compact ? s.wrapperCompact : s.wrapper}>
      <h1 className={s.title}>{title}</h1>
      {description && <p className={s.description}>{description}</p>}
      {children}
    </div>
  );
};
export default PageHeader;
