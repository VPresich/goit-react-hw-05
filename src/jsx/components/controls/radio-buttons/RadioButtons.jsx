import styles from './RadioButtons.module.css';

export const RadioButtons = ({ value, onChange, children }) => {
  return (
    <div className={styles.controlContainer}>
      <p className={styles.label}>{children}</p>
      <div className={styles.radioGroup}>
        <label>
          <input
            className={styles.input}
            type="radio"
            name="coffeeSize"
            value="sm"
            checked={value === 'sm'}
            onChange={onChange}
          />
          Small
        </label>
        <label>
          <input
            className={styles.input}
            type="radio"
            name="coffeeSize"
            value="md"
            checked={value === 'md'}
            onChange={onChange}
          />
          Meduim
        </label>
        <label>
          <input
            className={styles.input}
            type="radio"
            name="coffeeSize"
            value="lg"
            checked={value === 'lg'}
            onChange={onChange}
          />
          Large
        </label>
      </div>
    </div>
  );
};
