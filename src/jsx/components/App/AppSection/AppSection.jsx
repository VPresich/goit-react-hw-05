import styles from './AppSection.module.css';

const AppSection = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};
export default AppSection;
