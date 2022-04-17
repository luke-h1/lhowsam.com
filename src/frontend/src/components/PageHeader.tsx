import styles from './pageheader.module.scss';

interface PageHeaderProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  compact?: boolean;
}

const PageHeader = ({
  title,
  description,
  children,
  compact,
}: PageHeaderProps) => (
  <div className={compact ? styles.wrapperCompact : styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    {description && <p className={styles.description}>{description}</p>}
    {children}
  </div>
);

export default PageHeader;
