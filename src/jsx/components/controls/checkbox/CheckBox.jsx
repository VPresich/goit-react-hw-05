import styles from './CheckBox.module.css';

export const CheckBox = ({ value, onChange, children }) => {
  console.log(value);
  return (
    <div>
      <label>
        <input
          className={styles.imput}
          type="checkbox"
          name="terms"
          checked={value}
          onChange={onChange}
        />
        {children}
      </label>
      <button className={styles.button} type="button" disabled={!value}>
        Proceed
      </button>
    </div>
  );
};
