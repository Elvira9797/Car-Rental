import { RxDividerVertical } from 'react-icons/rx';
import css from './DetailsCar.module.css';
import React from 'react';

const DetailsCar = ({ car }) => {
  const [, city, country] = car.address.split(', ');

  const accessoriesAndFunc = [...car.accessories, ...car.functionalities];

  const rentalConditionsArray = car.rentalConditions.split('\n');

  const mileage = car.mileage;
  const formattedMileage = mileage.toLocaleString('en-US');

  return (
    <div className={css.modalContent}>
      <img className={css.carImg} src={car.img} alt={car.model} />

      <p className={css.carData}>
        {car.make} <span className={css.model}>{car?.model}</span>, {car?.year}
      </p>

      <div className={css.carDetailsWrapper}>
        <span className={css.carDetails}>{city}</span>
        <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
        <span className={css.carDetails}>{country}</span>
        <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
        <span className={css.carDetails}>Id: {car.id}</span>
        <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
        <span className={css.carDetails}>Year: {car.year}</span>
        <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
        <span className={css.carDetails}>Type: {car.type}</span>
        <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
        <span className={css.carDetails}>
          Fuel Consumption: {car.fuelConsumption}
        </span>
        <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
        <span className={css.carDetails}>Engine Size: {car.engineSize}</span>
      </div>

      <p className={css.description}>{car.description}</p>

      <span className={css.accessories}>Accessories and functionalities:</span>

      <div className={css.carDetailsWrapper}>
        {accessoriesAndFunc.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <span className={css.carDetails}>{item}</span>
              {index !== accessoriesAndFunc.length - 1 && (
                <RxDividerVertical color="rgba(18, 20, 23, 0.10)" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <span className={css.accessories}>Rental Conditions:</span>

      <div className={css.conditionWrapper}>
        {rentalConditionsArray.map((item, index) => {
          return (
            <span className={css.condition} key={index}>
              {index === 0 ? (
                <span>
                  Minimum age: <span className={css.blue}>{item}</span>
                </span>
              ) : (
                item
              )}
            </span>
          );
        })}
        <span className={css.condition}>
          Milage: <span className={css.blue}>{formattedMileage}</span>
        </span>
        <span className={css.condition}>
          Price: <span className={css.blue}>{car.rentalPrice}</span>
        </span>
      </div>

      <a href="tel:+380730000000" className={css.button}>
        Rental car
      </a>
    </div>
  );
};

export default DetailsCar;
