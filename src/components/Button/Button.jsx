import React from 'react';
import classes from './Button.module.scss';

export const Button = ({
  as = 'link',
  type = 'primary',
  buttonType = 'button',
  href = '#',
  children,
}) => {
  const Tag = as === 'link' ? 'a' : 'button';
  const btnClass = `${classes.btn} ${classes[`btn--${type}`]}`;

  const additionalProps = Tag === 'a' ? { href } : { type: buttonType };

  return (
    <Tag className={btnClass} {...additionalProps}>
      {children}
    </Tag>
  );
};
