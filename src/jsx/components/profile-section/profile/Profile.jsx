import styles from './Profile.module.css';

export const Profile = ({ name, tag, location, image, stats }) => {
  const statsData = Object.entries(stats);

  return (
    <div className={styles.profile}>
      <div className={styles.info}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        {statsData.map(([label, value], index) => (
          <li key={index}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
