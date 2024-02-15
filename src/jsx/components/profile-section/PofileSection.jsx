import userData from '../../../data/userdata.json';
import friends from '../../../data/friends.json';
import transactions from '../../../data/transactions.json';

import { Profile } from './profile/Profile';
import { FriendList } from './friends/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';

import styles from './ProfileSection.module.css';

export const ProfileSection = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div className={styles.section}>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
