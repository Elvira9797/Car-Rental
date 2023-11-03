import BrandFilter from 'components/BrandFilter/BrandFilter';
import CarsList from 'components/CarsList/CarsList';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operations';
import { selectCars, selectError, selectIsLoading } from 'redux/selectors';

const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <Loader />}
      <BrandFilter />
      {cars?.length > 0 ? <CarsList /> : <p>There aren't any cars</p>}
    </div>
  );
};

export default CatalogCarsPage;
