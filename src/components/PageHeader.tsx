import styles from './pageheader.module.scss';

interface PageHeaderProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  compact?: boolean;
  homePage?: boolean;
}

const PageHeader = ({
  title,
  description,
  children,
  compact,
  homePage,
}: PageHeaderProps) => (
  <div className={compact ? styles.wrapperCompact : styles.wrapper}>
    <h1 className={styles.title}>
      {homePage && (
        <span className="wave" style={{ marginRight: '7px' }}>
          👋
        </span>
      )}
      {title}
    </h1>
    {description && <p className={styles.description}>{description}</p>}
    {children}
  </div>
);

export default PageHeader;
