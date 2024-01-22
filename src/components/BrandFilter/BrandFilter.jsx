import { Select } from '@mantine/core';
import css from './BrandFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { fetchBrandCars } from 'redux/operations';
import { filter } from 'redux/carsSlice';

const data = [
  'All',
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
].map(brand => brand);

const BrandFilter = () => {
  const dispatch = useDispatch();

  const selectedValueBrand = useSelector(selectFilter);

  const onChangeFilter = async value => {
    if (value === 'All') {
      await dispatch(filter(''));

      await dispatch(fetchBrandCars(''));
    } else {
      await dispatch(filter(value));
      await dispatch(fetchBrandCars(value));
    }
  };

  return (
    <div className={css.filterWrap}>
      <Select
        label="Car brand"
        placeholder={selectedValueBrand ? selectedValueBrand : 'Pick brand'}
        data={data}
        withScrollArea={false}
        onChange={onChangeFilter}
        classNames={{
          dropdown: css.dropdown,
          input: css.input,
          wrapper: css.wrapper,
          label: css.label,
          option: css.option,
        }}
      />
    </div>
  );
};

export default BrandFilter;
