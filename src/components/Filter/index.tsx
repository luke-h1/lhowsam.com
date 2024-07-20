import Box from '../Box';
import * as styles from './Filter.css';

interface Props {
  onClick: () => void;
  removeFilter: () => void;
  filters: string[];
  filter: string;
}

const Filter = ({ filters, onClick, removeFilter, filter }: Props) => {
  return (
    <Box className={styles.tabBar}>
      <Box className={styles.tabRow}>
        <button
          type="button"
          onClick={removeFilter}
          className={styles.tab}
          role="tab"
          aria-selected={filter === 'all'}
        >
          Recently Added
        </button>
        {filters &&
          // eslint-disable-next-line no-shadow
          filters.map(filter => (
            <button
              key={filter}
              type="button"
              onClick={onClick}
              className={styles.tab}
              role="tab"
              aria-selected={!!filter}
            >
              {filter}
            </button>
          ))}
      </Box>
    </Box>
  );
};

export default Filter;
