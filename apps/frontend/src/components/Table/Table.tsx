/* eslint-disable no-shadow */
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
          {columns.map((column, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <th key={index} className={styles.heading}>
                {column.heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={index}>
              {columns.map((column, index) => {
                return (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={index} className={styles.cell}>
                    {row[column.accessor]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
