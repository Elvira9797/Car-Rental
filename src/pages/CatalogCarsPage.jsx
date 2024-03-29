import Button from 'components/Button';
import BrandFilter from 'components/BrandFilter';
import CarsList from 'components/CarsList';
import Loader from 'components/Loader/Loader';
import Container from 'components/Container';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPartCars } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectfilteredCars,
} from 'redux/selectors';

const CatalogCarsPage = () => {
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);
  const [currentCars, setCurrentCars] = useState([]);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filteredCars = useSelector(selectfilteredCars);

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
  }, [dispatch, filteredCars]);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <BrandFilter />
      {currentCars?.length > 0 ? (
        <CarsList cars={currentCars} />
      ) : (
        <p>There aren't any cars</p>
      )}
      {showButton && filteredCars.length === 0 && (
        <Button loadMore={loadMore} isLoading={isLoading}>
          Load More
        </Button>
      )}
    </Container>
  );
};

export default CatalogCarsPage;
