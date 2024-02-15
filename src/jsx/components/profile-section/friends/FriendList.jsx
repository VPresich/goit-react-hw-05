import { FriendListItem } from './FriendListItem';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friends-list']}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};
