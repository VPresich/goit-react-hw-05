import styles from './ReviewItem.module.css';

const ReviewItem = ({ item }) => {
  return (
    <div className={styles.card}>
      <h5>Author: {item.author}</h5>
      <p>Content: {item.content}</p>
    </div>
  );
};

export default ReviewItem;
