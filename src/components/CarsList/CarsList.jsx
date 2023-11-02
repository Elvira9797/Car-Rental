import CarsListItem from 'components/CarsListItem';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/selectors';
import css from './CarsList.module.css';
import { Flex } from '@mantine/core';

const CarsList = () => {
  const cars = useSelector(selectCars);

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
      {cars.map(car => {
        return <CarsListItem key={car.id} car={car} />;
      })}
    </Flex>
  );
};

export default CarsList;
