import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { getConfiguration } from '../../../api/getConfiguration';

import useFetchData from '../../../hooks/useFetchData';
import ApiService from '../../../api/ApiService';

import AppContainer from '../../App/AppContainer/AppContainer';
import AppSection from '../../App/AppSection/AppSection';

import MovieInfo from '../../MovieInfo/MovieInfo';
import MovieCast from '../../MovieCast/MovieCast';
import MovieReviews from '../../MovieReviews/MovieReviews';
import { FaArrowLeftLong } from 'react-icons/fa6';

import { CustomButton } from '../../UI/button/CustomButton';
import InfinityLoader from '../../UI/loader/Infinity/Infinity';

import styles from './MoviieDetails.module.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [itemCredits, setItemCredits] = useState([]);
  const [itemsReviews, setItemReviews] = useState([]);

  const [itemLoading, itemError, fetchItemData] = useFetchData(async id => {
    const responce = await ApiService.getMovieDetailsById(id);
    setItem(responce);
  });

  const [creditsLoading, creditsError, fetchCreditsData] = useFetchData(
    async (id, credits = 'credits') => {
      const responce = await ApiService.getMovieDetailsById(id, credits);
      setItemCredits(responce.cast);
    }
  );

  const [reviewsLoading, reviewsError, fetchReviewsData] = useFetchData(
    async (id, reviews = 'reviews') => {
      const responce = await ApiService.getMovieDetailsById(id, reviews);
      setItemReviews(responce.results);
    }
  );

  useEffect(() => handleById(), []);

  const handleById = () => {
    fetchItemData(id);
  };

  const handleCredits = () => {
    fetchCreditsData(id);
  };

  const handleReviews = () => {
    fetchReviewsData(id, 'reviews');
  };

  const handleGoBack = () => {
    // Переходим на предыдущую страницу
  };

  return (
    <AppContainer>
      <AppSection>
        <CustomButton onClick={handleGoBack}>
          <FaArrowLeftLong />
          Back
        </CustomButton>
        <InfinityLoader isLoading={itemLoading} />
        {itemError ? <p>{itemError}</p> : <MovieInfo item={item} />}

        <h1>Aditional information</h1>
        <hr></hr>
        <Link className={styles.link} to={`cast`} onClick={handleCredits}>
          Cast
        </Link>
        <MovieCast
          loading={creditsLoading}
          error={creditsError}
          items={itemCredits}
        />
        <hr></hr>
        <Link className={styles.link} to={`reviews`} onClick={handleReviews}>
          Reviews
        </Link>
        <MovieReviews
          loading={reviewsLoading}
          error={reviewsError}
          items={itemsReviews}
        />

        <hr></hr>
        {/* <CustomButton onClick={handleById}>Get by id</CustomButton> */}
        {/* <CustomButton onClick={handleCredits}>Cast</CustomButton> */}
        {/* <CustomButton onClick={handleReviews}>Revies</CustomButton> */}
      </AppSection>
    </AppContainer>
  );
};

export default MovieDetailsPage;
