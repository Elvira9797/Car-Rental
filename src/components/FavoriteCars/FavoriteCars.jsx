import { Flex } from '@mantine/core';
import CarsListItem from 'components/CarsListItem/CarsListItem';
import { useSelector } from 'react-redux';
import { selectCars, selectSelectedCar } from 'redux/selectors';
import css from './FavoriteCars.module.css';

const FavoriteCars = () => {
  const cars = useSelector(selectCars);
  const isSelected = useSelector(selectSelectedCar);

  const filteredCars = cars.filter(car => isSelected.includes(car.id));

  console.log(filteredCars);
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
      {filteredCars.map(car => {
        return <CarsListItem key={car.id} car={car} />;
      })}
    </Flex>
  );
};

export default FavoriteCars;
