import CarsListItem from 'components/CarsListItem';
import { useSelector } from 'react-redux';
import { selectFilteredCars } from 'redux/selectors';
import css from './CarsList.module.css';
import { Flex } from '@mantine/core';

const CarsList = ({ cars }) => {
  const filteredCars = useSelector(selectFilteredCars);

  const carsToRender = filteredCars.length > 0 ? filteredCars : cars;

  return (
    <Flex
      rowGap="50px"
      columnGap="24px"
      justify="center"
      align="flex-start"
      direction="row"
      wrap="wrap"
      className={css.carsList}
    >
      {carsToRender.map(car => {
        return <CarsListItem key={car.id} car={car} />;
      })}
    </Flex>
  );
};

export default CarsList;
