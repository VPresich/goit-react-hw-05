import { useState, useEffect } from 'react';

import { Description } from './description/Description';
import { Options } from './options/Options';
import { Feedback } from './feedback/Feedback';
import { saveToLocalStorage, getInitial } from './utils/local-storage';
import { getStatistics } from './utils/feedback-satistics';
import { Notification } from './notification/Notification';

import styles from './CafeFeedback.module.css';

import {
  CAFE_TITLE,
  FEEDBACK_INVITATION,
  NOTIFICATION,
  INIT_REVIEWS,
} from './utils/constants';

export const CafeFeedback = () => {
  const [reviews, setReviews] = useState(getInitial());
  const [statistics, calcStatistics] = useState(getStatistics(reviews));

  const handleReview = type => {
    setReviews(prevReviews => ({
      ...prevReviews,
      [type]: prevReviews[type] + 1,
    }));
  };

  const handleReset = () => {
    setReviews(INIT_REVIEWS);
  };

  useEffect(() => {
    saveToLocalStorage(reviews);
    calcStatistics(getStatistics(reviews));
  }, [reviews]);

  return (
    <div className={styles.section}>
      <Description invitation={FEEDBACK_INVITATION}>{CAFE_TITLE}</Description>
      <Options
        onReview={handleReview}
        onReset={handleReset}
        isResetBtn={statistics.total > 0}
      />
      {statistics.total > 0 ? (
        <Feedback reviews={reviews} statistics={statistics}></Feedback>
      ) : (
        <Notification>{NOTIFICATION}</Notification>
      )}
    </div>
  );
};
