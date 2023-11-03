import { Select } from '@mantine/core';
import css from './BrandFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { filter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

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

  const selectedValue = useSelector(selectFilter);

  const onChangeFilter = value => {
    if (value === 'All') {
      dispatch(filter(''));
    } else {
      dispatch(filter(value));
    }
  };

  return (
    <div className={css.filterWrap}>
      <Select
        label="Car brand"
        placeholder={selectedValue ? selectedValue : 'Pick brand'}
        data={data}
        withScrollArea={false}
        onChange={onChangeFilter}
        styles={{
          dropdown: {
            maxHeight: 200,
            overflowY: 'auto',
            borderRadius: '14px',
            border: '1px solid rgba(18, 20, 23, 0.05)',
            background: '#FFF',
            boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
          },
          input: {
            height: '44px',
            borderRadius: '14px',
            background: '#F7F7FB',
            border: 'none',
            color: '#121417',
            fontSize: '18px',
            fontFamily: 'Manrope',
            fontWeight: '500',
          },
          wrapper: {
            width: '224px',
          },
          label: {
            color: '#8A8A89',
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '5px',
          },
          option: {
            color: 'rgba(18, 20, 23, 0.20)',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '20px',
          },
        }}
      />
      <button className={css.button}>Search</button>
    </div>
  );
};

export default BrandFilter;
