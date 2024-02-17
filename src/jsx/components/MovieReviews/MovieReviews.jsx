import AppSection from '../App/AppSection/AppSection';
import InfinityLoader from '../UI/loader/Infinity/Infinity';
import ReviewList from '../ReviewList/ReviewList';

const MovieReviews = ({ loading, error, items }) => {
  if (!items.length) return <></>;
  return (
    <AppSection>
      <InfinityLoader isLoading={loading} />
      {error && <p>{error}</p>}
      <ReviewList items={items} />
    </AppSection>
  );
};

export default MovieReviews;
