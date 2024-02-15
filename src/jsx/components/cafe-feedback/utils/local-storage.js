import { KEY_LOCALSTORAGE, INIT_REVIEWS } from './constants';

export const getInitial = () => {
  const storedReviews = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
  return storedReviews ? storedReviews : INIT_REVIEWS;
};

export const saveToLocalStorage = obj => {
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(obj));
};
