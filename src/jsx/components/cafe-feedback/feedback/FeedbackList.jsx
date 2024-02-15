import styles from './FeedbackList.module.css';

export const FeedbackList = ({ reviews }) => {
  return (
    <ul className={styles.list}>
      {Object.entries(reviews).map(([type, value]) => (
        <li className={styles.item} key={type}>
          {type}: {value}
        </li>
      ))}
    </ul>
  );
};
