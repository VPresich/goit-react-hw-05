import { useState, useEffect } from 'react';
import { RxExit } from 'react-icons/rx';
import Modal from 'react-modal';
import { SearchForm } from './search-form/SearchForm';
import { ImageGallery } from './image-gallery/ImageGallery';

import { fetchData } from './gallery-api/fetch-data';
import { InfinitySpin } from 'react-loader-spinner';
import { ERR_EMPTY_LOAD } from './notifications/constants';
import { CustomButton } from '../bookphone/custom-button/CustomButton';
// import { CustomModal } from './custom-modal/CustomModal';

import styles from './HttpImages.module.css';

export const HttpImages = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currPage, setCurrPage] = useState(0);
  const [hasMorePages, setHasMorePages] = useState(false);
  const [filter, setFilter] = useState('');

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const updateImages = async (strFilter, page) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchData(strFilter, page);
      if (data.results.length > 0) {
        setItems(prevItems => [...prevItems, ...data.results]);
        setCurrPage(page);
        setHasMorePages(page >= data.total_pages ? false : true);
      } else {
        setError(true);
        setHasMorePages(false);
      }
    } catch (error) {
      setError(true);
      setHasMorePages(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = strFilter => {
    setFilter(strFilter);
    setItems([]);
    setCurrPage(0);
    setHasMorePages(false);
    updateImages(strFilter, 1);
  };

  const handleMore = () => updateImages(filter, currPage + 1);

  const openModal = image => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.section}>
      <SearchForm onSearch={handleSearch} />
      <div className={styles.content}>
        {loading && (
          <InfinitySpin
            className={styles.loader}
            visible={loading}
            ariaLabel="Loading"
          />
        )}
        {error && <p>{ERR_EMPTY_LOAD}</p>}
        {items.length > 0 && (
          <ImageGallery images={items} openModal={openModal} />
        )}
        {hasMorePages && !loading && (
          <CustomButton onClick={handleMore}>Load More</CustomButton>
        )}
      </div>
      {/* <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      /> */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        overlayClassName={styles.backdrop}
        className={styles.modal}
      >
        <div className={styles.modalcontainer}>
          <button className={styles.closeButton} onClick={closeModal}>
            <RxExit />
          </button>
          {selectedImage && (
            <>
              <div className={styles.imgContainer}>
                <img
                  src={selectedImage.urls.regular}
                  alt={selectedImage.description}
                  className={styles.image}
                />
              </div>
              <p className={styles.text}>
                Author: {selectedImage.user.username}
              </p>
              <p className={styles.text}>Likes: {selectedImage.likes} </p>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};
