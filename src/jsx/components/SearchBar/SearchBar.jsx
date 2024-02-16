import { useState } from 'react';
import { CustomButton } from '../UI/button/CustomButton';
import { CustomInput } from '../UI/input/CustomInput';

import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(value);
    event.target.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <CustomInput
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <CustomButton type="submit">Search</CustomButton>
    </form>
  );
};

export default SearchBar;
