import { useState } from 'react';
import useFetchData from '../../../hooks/useFetchData';
import ApiService from '../../../api/ApiService';
import AppContainer from '../../App/AppContainer/AppContainer';
import AppSection from '../../App/AppSection/AppSection';
import SearchBar from '../../SearchBar/SearchBar';
import InfinityLoader from '../../UI/loader/Infinity/Infinity';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { ItemsList } from '../../ItemsList/ItemsList';
import { NO_ELEMENTS } from '../../ErrorMessage/constants';
import { Toaster } from 'react-hot-toast';
import { errNotify } from '../../../notifications/error-notify';
import { ERR_EMPTY_SEARCH } from '../../../notifications/constants';

const MoviesPage = () => {
  const [items, setItems] = useState([]);

  const [loading, error, fetchItemData] = useFetchData(async filter => {
    const responce = await ApiService.searchMovies(filter);
    setItems(responce);
  });

  const handleSearch = strFilter => {
    console.log(strFilter);
    if (strFilter.trim() === '') {
      errNotify(ERR_EMPTY_SEARCH);
      return;
    }
    fetchItemData(strFilter);
  };

  return (
    <AppContainer>
      <AppSection>
        <SearchBar onSearch={handleSearch} />
        <Toaster />
        <InfinityLoader isLoading={loading} />
        {error && <ErrorMessage />}
        {items.length ? (
          <ItemsList items={items} />
        ) : (
          <ErrorMessage msg={NO_ELEMENTS} />
        )}
      </AppSection>
    </AppContainer>
  );
};

export default MoviesPage;
