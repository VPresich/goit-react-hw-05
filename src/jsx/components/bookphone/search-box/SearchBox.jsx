import { useId } from 'react';
import styles from './SearchBox.module.css';

export const SearchBox = ({ value, onChange }) => {
  const searchInput = useId();

  return (
    <div className={styles.searchbox}>
      <label className={styles.label} htmlFor={searchInput}>
        Find contacts by name:
      </label>
      <input
        className={styles.input}
        id={searchInput}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
