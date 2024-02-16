import { ERR_LOAD } from './constants';
import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ isError }) => {
  return isError && <p className={styles.empty}>{ERR_LOAD}</p>;
};

export default ErrorMessage;
