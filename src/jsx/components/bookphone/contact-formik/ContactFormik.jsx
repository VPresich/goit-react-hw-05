import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { CustomButton } from '../custom-button/CustomButton';
import styles from './ContactFormik.module.css';

const initialValues = {
  name: '',
  number: '',
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const ContactFormik = ({ onAddContact }) => {
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={styles.contactform}>
        <div className={styles.info}>
          <div>
            <label className={styles.label} htmlFor={nameId}>
              Name:
            </label>
            <Field
              className={styles.input}
              id={nameId}
              type="text"
              name="name"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="name"
              as="span"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor={phoneId}>
              Number:
            </label>
            <Field
              className={styles.input}
              id={phoneId}
              type="tel"
              name="number"
            />
            <span className={styles.errorMessage}>
              <ErrorMessage name="number" as="span" />
            </span>
          </div>
        </div>
        <CustomButton typeBtn="submit">Add Contact</CustomButton>
      </Form>
    </Formik>
  );
};
