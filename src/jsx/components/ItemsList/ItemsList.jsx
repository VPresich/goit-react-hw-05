import styles from './ItemsList.module.css';
import { Link } from 'react-router-dom';

export const ItemsList = ({ items }) => {
  return (
    <ul className={styles.items}>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <Link to={`/movies/${item.id}`} className={styles.link}>
            <p>{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
