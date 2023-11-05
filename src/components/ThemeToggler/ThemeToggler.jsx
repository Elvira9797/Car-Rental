import clsx from 'clsx';
import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { BsMoon } from 'react-icons/bs';
import { BiSun } from 'react-icons/bi';

import css from './ThemeToggler.module.css';

function ThemeToggler() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
      variant="transparent"
      aria-label="Toggle color scheme"
      className={css.icon}
    >
      <BiSun className={clsx(css.icon, css.light)} stroke={2} />
      <BsMoon className={clsx(css.icon, css.dark)} stroke={2} />
    </ActionIcon>
  );
}

export default ThemeToggler;
