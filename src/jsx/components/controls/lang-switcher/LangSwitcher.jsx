import { useId } from 'react';
import styles from './LangSwitcher.module.css';

export const LangSwitcher = ({ value, onChange, children }) => {
  const selectId = useId();

  return (
    <div className={styles.controlContainer}>
      <label className={styles.label} htmlFor={selectId}>
        {children}
      </label>
      <select
        className={styles.select}
        id={selectId}
        onChange={evt => onChange(evt.target.value)}
        value={value}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};
