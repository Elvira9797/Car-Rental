import React from 'react';

import css from './Button.module.css';
import clsx from 'clsx';

const Button = ({ loadMore, children, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <button
          className={clsx(css.button, css.loadingButton)}
          type="button"
          disabled
        >
          Loading...
        </button>
      ) : (
        <button className={css.button} type="button" onClick={() => loadMore()}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
