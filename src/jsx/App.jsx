import { MenuApp } from './menu-app/MenuApp';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.container}>
      <MenuApp />
    </div>
  );
};
