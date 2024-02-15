import styles from './ContactItem.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';
import { CustomButton } from '../custom-button/CustomButton';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <>
      <div className={styles.info}>
        <p className={styles.name}>
          <FaUser /> {contact.name}
        </p>
        <p className={styles.phone}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <CustomButton
        onClick={() => onDeleteContact(contact.id)}
        typeBtn="button"
      >
        Delete
      </CustomButton>
    </>
  );
};
