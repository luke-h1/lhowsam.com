import styles from './CodeSandbox.module.scss';

interface Props {
  id: string;
  theme: 'dark' | 'light';
}

const CodeSandbox = ({ id, theme }: Props) => {
  return (
    <div className={styles.wrapper}>
      <iframe
        title="CodeSandbox"
        src={`https://codesandbox.io/embed/${id}?fontsize=14&codemirror=1&theme=${theme}`}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        className={styles.sandbox}
      />
    </div>
  );
};

export default CodeSandbox;
