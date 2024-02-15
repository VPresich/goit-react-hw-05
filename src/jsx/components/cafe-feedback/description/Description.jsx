import styles from './Description.module.css';
import { TitleSection } from '../../titlesection/TitleSection';

export const Description = () => {
  return (
    <div>
      <TitleSection>Sip Happens Café</TitleSection>
      <p className={styles.invitation}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
