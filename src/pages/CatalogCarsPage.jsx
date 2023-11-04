import Button from 'components/Button/Button';
import BrandFilter from 'components/BrandFilter/BrandFilter';
import CarsList from 'components/CarsList/CarsList';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPartCars } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const CatalogCarsPage = () => {
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);
  const [currentCars, setCurrentCars] = useState([]);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const loadMore = () => {
    dispatch(fetchPartCars(page + 1))
      .then(response => {
        const newCarsData = response.payload;
        if (newCarsData.length > 0) {
          setCurrentCars([...currentCars, ...newCarsData]);
          setPage(page + 1);
        }

        if (newCarsData.length <= 11) {
          setShowButton(false);
        }
      })
      .catch(error => {
        console.error('Error while loading more cars:', error);
      });
  };

  useEffect(() => {
    dispatch(fetchPartCars(1))
      .then(response => {
        const newCarsData = response.payload;
        if (newCarsData.length > 0) {
          setCurrentCars(newCarsData);
          setShowButton(true);
        }
      })
      .catch(error => {
        console.error('Error while fetching initial cars:', error);
      });
  }, [dispatch]);

  useEffect(() => {
    if (page !== 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [page]);

  return (
    <div>
      {isLoading && !error && <Loader />}
      <BrandFilter />
      {currentCars?.length > 0 ? (
        <CarsList cars={currentCars} />
      ) : (
        <p>There aren't any cars</p>
      )}
      {showButton && (
        <Button loadMore={loadMore} isLoading={isLoading}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default CatalogCarsPage;
