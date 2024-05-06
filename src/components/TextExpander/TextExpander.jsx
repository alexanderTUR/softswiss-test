import { useState } from 'react';
import classes from './TextExpander.module.scss';

export const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = 'Read more',
  collapseButtonText = 'Read less',
  expanded = false,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayedText = isExpanded
    ? children
    : `${children.split(' ').slice(0, collapsedNumWords).join(' ')}...`;

  const textId = `text-expander-${Date.now()}`;

  return (
    <div className={classes['text-expander']}>
      <p id={textId} className={classes['text-expander__text']}>
        {displayedText}
      </p>
      <button
        type='button'
        onClick={toggleExpand}
        className={classes['text-expander__button']}
        aria-expanded={isExpanded}
        aria-controls={textId}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};
