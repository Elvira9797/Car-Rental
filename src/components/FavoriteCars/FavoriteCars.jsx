import React, { useState, useEffect } from 'react';
import { Flex } from '@mantine/core';
import CarsListItem from 'components/CarsListItem/CarsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, selectSelectedCar } from 'redux/selectors';
import css from './FavoriteCars.module.css';
import { fetchAllCars } from 'redux/operations';
import Button from 'components/Button';

const FavoriteCars = () => {
  const cars = useSelector(selectAllCars);
  const isSelected = useSelector(selectSelectedCar);

  const [visibleCars, setVisibleCars] = useState(12);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const filteredCars = cars.filter(car => isSelected.includes(car.id));
  const carsToDisplay = filteredCars.slice(0, visibleCars);

  const handleLoadMore = () => {
    setVisibleCars(prevVisibleCars => prevVisibleCars + 12);
  };

  useEffect(() => {
    if (visibleCars > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [visibleCars]);

  return (
    <div>
      <Flex
        rowGap="50px"
        columnGap="24px"
        justify="center"
        align="flex-start"
        direction="row"
        wrap="wrap"
        className={css.carsList}
      >
        {carsToDisplay.map(car => {
          return <CarsListItem key={car.id} car={car} />;
        })}
      </Flex>
      {visibleCars < filteredCars.length && (
        <Button loadMore={handleLoadMore} style={{ margin: '20px auto' }}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default FavoriteCars;
