import { useState } from 'react';

import styles from './LoginForm.module.css';
import { CustomButton } from '../bookphone/custom-button/CustomButton';

export const LoginForm = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSumit = evt => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: '',
      password: '',
    });
  };

  return (
    <div className={styles.section}>
      <form className={styles.form} onSubmit={handleSumit}>
        <div className={styles.info}>
          <input
            className={styles.input}
            type="text"
            name="login"
            value={values.login}
            onChange={handleChange}
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <CustomButton type="submit">Login</CustomButton>
      </form>
    </div>
  );
};
