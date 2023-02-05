import * as styles from './Table.css';

interface Props {
  columns: {
    heading: string;
    accessor: string;
  }[];
  data: {
    [key: string]: string | number;
  }[];
  caption?: string;
}

const Table = ({ columns, data, caption }: Props) => {
  return (
    <table className={styles.root}>
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {columns &&
            columns.map((column, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <th key={index} className={styles.heading}>
                {column.heading}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((row, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index}>
              {columns &&
                // eslint-disable-next-line no-shadow
                columns.map((column, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={index} className={styles.cell}>
                    {row[column.accessor]}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Table;
