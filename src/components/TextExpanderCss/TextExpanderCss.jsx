import React from 'react';
import classes from './TextExpanderCss.module.scss';

export const TextExpanderCss = ({ children }) => {
  const expanderId = `text-expander-${Date.now()}`;
  return (
    <div className={classes.textExpander}>
      <input type='checkbox' id={expanderId} className={classes.textExpanderCheckbox} />
      <p className={classes.textExpanderText}>{children}</p>
      <label htmlFor={expanderId} className={classes.textExpanderLabel}></label>
    </div>
  );
};
