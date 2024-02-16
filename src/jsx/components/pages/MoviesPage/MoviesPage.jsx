import { useState } from 'react';
import useFetchData from '../../../hooks/useFetchData';
import ApiService from '../../../api/ApiService';
import AppContainer from '../../App/AppContainer/AppContainer';
import AppSection from '../../App/AppSection/AppSection';
import SearchBar from '../../SearchBar/SearchBar';
import InfinityLoader from '../../UI/loader/InfinityLoader/InfinityLoader';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { ItemsList } from '../../ItemsList/ItemsList';

const MoviesPage = () => {
  const [items, setItems] = useState([]);

  const [loading, error, fetchItemData] = useFetchData(async filter => {
    const responce = await ApiService.searchMovies(filter);
    setItems(responce);
  });

  const handleSearch = strFilter => {
    console.log(strFilter);
    if (strFilter.trim() === '') {
      // errNotify(ERR_EMPTY_SEARCH);
      return;
    }
    fetchItemData(strFilter);
    // setError(false);
    // setLoading(true);
    // ApiService.searchMovies(strFilter)
    //   .then(data => {
    //     setItems(prevItems => [...prevItems, ...data.results]);
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     // errNotify(error.message);
    //     setError(true);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <AppContainer>
      <AppSection>
        <SearchBar onSearch={handleSearch}></SearchBar>
        <InfinityLoader isLoading={loading} />
        <ErrorMessage isError={error} />
        {items.length > 0 && <ItemsList items={items} />}
      </AppSection>
    </AppContainer>
  );
};

export default MoviesPage;
