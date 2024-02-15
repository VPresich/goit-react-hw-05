import styles from './FriendListItem.module.css';
import clsx from 'clsx';

const getStatusClass = isOnline =>
  clsx(styles.status, {
    [styles.online]: isOnline,
    [styles.offline]: !isOnline,
  });

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={getStatusClass(isOnline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
