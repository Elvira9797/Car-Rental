import css from './CarsListItem.module.css';
import { RxDividerVertical } from 'react-icons/rx';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

import { useDispatch, useSelector } from 'react-redux';
import { toggleCarSelection } from 'redux/carsSlice';
import { useState } from 'react';
import ModalDetailCar from '../ModalDetailsCar';

const CarsListItem = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isSelected = useSelector(state =>
    state.cars.selectedCars.includes(car.id)
  );

  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleCarSelection(car.id));
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const [, city, country] = car.address.split(', ');
  return (
    <>
      <li className={css.carsListItem}>
        <label className={css.container}>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
          />
          {isSelected ? (
            <BsSuitHeartFill color="#3470FF" />
          ) : (
            <BsSuitHeart color="white" />
          )}
        </label>

        <img className={css.carImg} src={car.img} alt={car.model} />
        <div className={css.carDataWrapper}>
          <p className={css.carData}>
            {car.make} <span className={css.model}>{car?.model}</span>,{' '}
            {car?.year}
          </p>
          <span className={css.carData}>{car.rentalPrice}</span>
        </div>
        <div className={css.carDetailsWrapper}>
          <span className={css.carDetails}>{city}</span>
          <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
          <span className={css.carDetails}>{country}</span>
          <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
          <span className={css.carDetails}>{car.rentalCompany}</span>
          <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
          <span className={css.carDetails}>{car.type}</span>
          <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
          <span className={css.carDetails}>{car.model}</span>
          <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
          <span className={css.carDetails}>{car.mileage}</span>
        </div>
        <button className={css.button} onClick={onOpen}>
          Learn more
        </button>
      </li>
      {isOpen && <ModalDetailCar onClose={onClose} car={car} />}
    </>
  );
};

export default CarsListItem;
