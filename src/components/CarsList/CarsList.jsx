import CarsListItem from 'components/CarsListItem';
import { useSelector } from 'react-redux';
import { selectCars, selectFilter } from 'redux/selectors';
import css from './CarsList.module.css';
import { Flex } from '@mantine/core';

const CarsList = () => {
  const cars = useSelector(selectCars);

  const filterValue = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const formatedFiltered = filterValue.toLowerCase();
    return cars.filter(({ make }) =>
      make.toLowerCase().includes(formatedFiltered)
    );
  };

  const filteredContacts = getFilteredContacts();

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
      {filteredContacts.map(car => {
        return <CarsListItem key={car.id} car={car} />;
      })}
    </Flex>
  );
};

export default CarsList;
