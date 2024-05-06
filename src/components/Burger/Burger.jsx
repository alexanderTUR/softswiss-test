import classes from './Burger.module.scss';
import React from 'react';

export const Burger = ({ toggle, isActive }) => {
  return (
    <button
      className={`${classes['burger-button']} ${isActive ? classes['burger-button--is-active'] : ''}`}
      type='button'
      aria-label='Toggle menu'
      aria-controls='navigation'
      aria-expanded={isActive ? 'true' : 'false'}
      onClick={toggle}
    >
      <span className={classes['burger-button__box']}>
        <span className={classes['burger-button__inner']}></span>
      </span>
      <span className='visually-hidden'>{isActive ? 'Close menu' : 'Open menu'}</span>
    </button>
  );
};
