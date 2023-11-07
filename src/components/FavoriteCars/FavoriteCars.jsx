import React, { useState, useEffect } from 'react';
import { Flex } from '@mantine/core';
import CarsListItem from 'components/CarsListItem/CarsListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCars, selectSelectedCar } from 'redux/selectors';
import css from './FavoriteCars.module.css';
import { fetchAllCars } from 'redux/operations';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';

const FavoriteCars = () => {
  const cars = useSelector(selectAllCars);
  const isSelected = useSelector(selectSelectedCar);

  const [visibleCars, setVisibleCars] = useState(12);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  const favoriteCars = cars.filter(car => isSelected.includes(car.id));
  const carsToDisplay = favoriteCars.slice(0, visibleCars);

  const handleLoadMore = () => {
    setVisibleCars(prevVisibleCars => prevVisibleCars + 12);
  };

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <div>
      {carsToDisplay.length === 0 ? (
        <div className={css.buttonWrap}>
          <h1 className={css.title}>
            You have no selected cars. <br /> Go to the catalog
          </h1>
          <button className={css.button} onClick={handleClick}>
            Catalog
          </button>
        </div>
      ) : (
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
      )}
      {visibleCars < favoriteCars.length && (
        <Button loadMore={handleLoadMore} style={{ margin: '20px auto' }}>
          Load More
        </Button>
      )}
    </div>
  );
};

export default FavoriteCars;
