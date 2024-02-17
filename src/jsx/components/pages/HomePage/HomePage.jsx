import { useState, useEffect } from 'react';
import useFetchData from '../../../hooks/useFetchData';
import AppContainer from '../../App/AppContainer/AppContainer';
import AppSection from '../../App/AppSection/AppSection';
import ApiServise from '../../../api/ApiService/';
import InfinityLoader from '../../UI/loader/Infinity/Infinity';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import { ItemsList } from '../../ItemsList/ItemsList';

// import { CustomButton } from '../../UI/button/CustomButton';
const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, error, fetchItemData] = useFetchData(async () => {
    const responce = await ApiServise.getTrends();
    setItems(responce);
  });

  const handleLoadList = () => {
    fetchItemData();
  };

  useEffect(() => {
    handleLoadList();
  }, []);

  return (
    <AppContainer>
      <AppSection>
        <h1>Trending today</h1>
        <InfinityLoader isLoading={loading} />
        {error && <ErrorMessage />}
        <ItemsList items={items}></ItemsList>
        {/* <CustomButton onClick={handleLoadList}>Get Trending Movies</CustomButton> */}
      </AppSection>
    </AppContainer>
  );
};

export default HomePage;
