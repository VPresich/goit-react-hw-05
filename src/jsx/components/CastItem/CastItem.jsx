import styles from './CastItem.module.css';
import { BASE_IMG_URL } from '../../api/constants';

const CastItem = ({ item }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.photo}
        src={BASE_IMG_URL + '/w200/' + item.profile_path}
        alt={item.original_name}
      />
      <p>Name: {item.original_name}</p>
      <p>Popularity: {item.popularity}</p>
      <p>Character: {item.character}</p>
    </div>
  );
};

export default CastItem;
