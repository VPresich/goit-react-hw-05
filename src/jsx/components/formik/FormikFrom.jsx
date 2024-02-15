import { useId } from 'react';

import { Formik, Form, Field } from 'formik';

import { CustomButton } from '../bookphone/custom-button/CustomButton';
import styles from './FormikForm.module.css';

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};

export const FormikForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={styles.section}>
      <Formik
        className={styles.form}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={styles.info}>
            <label className={styles.label} htmlFor={nameFieldId}>
              Username
            </label>
            <Field
              className={styles.input}
              id={nameFieldId}
              type="text"
              name="username"
            />
            <label className={styles.label} htmlFor={emailFieldId}>
              Email
            </label>
            <Field
              className={styles.input}
              id={emailFieldId}
              type="email"
              name="email"
            />

            <label htmlFor={msgFieldId}>Message</label>
            <Field
              as="textarea"
              name="message"
              id={msgFieldId}
              rows="5"
              style={{ resize: 'none' }}
            />
            <Field
              className={styles.input}
              as="select"
              name="level"
              id={levelFieldId}
            >
              <option value="good">Good</option>
              <option value="neutral">Neutral</option>
              <option value="bad">Bad</option>
            </Field>
          </div>
          <CustomButton type="button">Submit</CustomButton>
        </Form>
      </Formik>
    </div>
  );
};
