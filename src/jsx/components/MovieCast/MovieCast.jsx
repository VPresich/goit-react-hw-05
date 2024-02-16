import AppSection from '../App/AppSection/AppSection';
import InfinityLoader from '../UI/loader/InfinityLoader/InfinityLoader';
import CastList from '../CastList/CastList';

const MovieCast = ({ loading, error, items }) => {
  if (!items.length) return <></>;
  return (
    <AppSection>
      <InfinityLoader isLoading={loading} />
      {error && <p>{error}</p>}
      {items && <CastList items={items}></CastList>}
    </AppSection>
  );
};

export default MovieCast;
