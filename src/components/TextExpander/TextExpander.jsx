import classes from './TextExpander.module.scss';
import { useState } from 'react';

export const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = 'Read more',
  collapseButtonText = 'Read less',
  expanded = false,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const toggleExpand = () => {
    setIsExpanded((exp) => !exp);
  };

  const displayedText = isExpanded
    ? children
    : `${children.split(' ').slice(0, collapsedNumWords).join(' ')}...`;

  return (
    <div className={classes['text-expander']}>
      <p className={classes['text-expander__text']}>{displayedText}</p>
      <button type='button' onClick={toggleExpand} className={classes['text-expander__button']}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};
