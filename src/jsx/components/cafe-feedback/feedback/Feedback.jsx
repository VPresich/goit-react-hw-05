import styles from './Feedback.module.css';
import { FeedbackList } from './FeedbackList';

export const Feedback = ({ reviews, statistics: { total, positive } }) => {
  return (
    <div>
      <FeedbackList reviews={reviews} />
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.positive}>Positive: {positive} %</p>
    </div>
  );
};
