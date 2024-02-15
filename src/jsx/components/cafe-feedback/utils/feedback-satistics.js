const totalNoBad = (reviews, bad) => {
  return Object.entries(reviews)
    .filter(([key]) => key !== bad)
    .reduce((sum, [, value]) => sum + value, 0);
};

const totalFeedback = reviews => {
  return Object.values(reviews).reduce((sum, value) => sum + value, 0);
};

const positivePercents = (reviews, bad = 'bad') => {
  return Math.round((totalNoBad(reviews, bad) / totalFeedback(reviews)) * 100);
};

export const getStatistics = reviews => {
  return {
    total: totalFeedback(reviews),
    positive: positivePercents(reviews),
  };
};
