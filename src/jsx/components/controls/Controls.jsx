import { useState } from 'react';

import { LangSwitcher } from './lang-switcher/LangSwitcher';
import { RadioButtons } from './radio-buttons/RadioButtons';
import { CheckBox } from './checkbox/CheckBox';

import styles from './Controls.module.css';

export const Controls = () => {
  const [lang, setLang] = useState('uk');
  const [coffeeSize, setCoffeeSize] = useState('sm');
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleSizeChange = evt => {
    setCoffeeSize(evt.target.value);
  };

  const handleChange = event => {
    setHasAccepted(event.target.checked);
  };

  return (
    <>
      <div className={styles.section}>
        <p className={styles.value}>Selected language: {lang}</p>
        <LangSwitcher value={lang} onChange={setLang}>
          Choose language:
        </LangSwitcher>
      </div>

      <div className={styles.section}>
        <p className={styles.value}>Selected coffe: {coffeeSize}</p>
        <RadioButtons value={coffeeSize} onChange={handleSizeChange}>
          Select coffee size:
        </RadioButtons>
      </div>

      <div className={styles.section}>
        <CheckBox value={hasAccepted} onChange={handleChange}>
          I accept terms and conditions
        </CheckBox>
      </div>
    </>
  );
};
