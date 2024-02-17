import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { getConfiguration } from '../../../api/getConfiguration';

import useFetchData from '../../../hooks/useFetchData';
import ApiService from '../../../api/ApiService';

import AppContainer from '../../App/AppContainer/AppContainer';
import AppSection from '../../App/AppSection/AppSection';

import MovieInfo from '../../MovieInfo/MovieInfo';
import { FaArrowLeftLong } from 'react-icons/fa6';

import { CustomButton } from '../../UI/button/CustomButton';
import InfinityLoader from '../../UI/loader/Infinity/Infinity';

import styles from './MoviieDetails.module.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const [itemLoading, itemError, fetchItemData] = useFetchData(async id => {
    const responce = await ApiService.getMovieDetailsById(id);
    setItem(responce);
  });

  useEffect(() => handleById(), []);

  const handleById = () => {
    fetchItemData(id);
  };

  const handleGoBack = () => {};

  return (
    <AppContainer>
      <AppSection>
        <CustomButton onClick={handleGoBack}>
          <FaArrowLeftLong />
          Back
        </CustomButton>
        <InfinityLoader isLoading={itemLoading} />
        {itemError ? <p>{itemError}</p> : <MovieInfo item={item} />}
      </AppSection>
      <AppSection>
        <h1>Aditional information</h1>
        <hr></hr>
        <nav className={styles.navLink}>
          <NavLink className={styles.link} to={`cast`}>
            Cast
          </NavLink>

          <NavLink className={styles.link} to={`reviews`}>
            Reviews
          </NavLink>
        </nav>
        <hr></hr>
      </AppSection>
      <Outlet />
      {/* <CustomButton onClick={handleById}>Get by id</CustomButton> */}
    </AppContainer>
  );
};

export default MovieDetailsPage;
