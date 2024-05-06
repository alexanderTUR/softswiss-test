import React from 'react';
import classes from './Burger.module.scss';

export const Burger = ({ toggle, isActive }) => {
  return (
    <button
      className={`${classes['burger-button']} ${isActive ? classes['burger-button--is-active'] : ''}`}
      type='button'
      aria-label={isActive ? 'Close menu' : 'Open menu'}
      aria-controls='navigation'
      aria-expanded={isActive}
      onClick={toggle}
    >
      <span className={classes['burger-button__box']}>
        <span className={classes['burger-button__inner']}></span>
      </span>
    </button>
  );
};
