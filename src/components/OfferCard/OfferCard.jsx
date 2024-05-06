import classes from './OfferCard.module.scss';
import { Button } from '../Button/Button';
import { useState } from 'react';

export const OfferCard = (props) => {
  const { title, text, bgImage, bgImageX2, learnMoreLink, isWide = false } = props;
  const [hover, setHover] = useState(false);

  const backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), 
    image-set(url('${bgImage}') 1x, url('${bgImageX2}') 2x)`;
  const cardClasses = `${classes['offer-card']} ${isWide ? classes['offer-card--wide'] : ''} ${hover ? classes['offer-card--hover'] : ''}`;

  return (
    <div className={cardClasses} style={{ backgroundImage }}>
      <div className={classes['offer-card__content']}>
        <h3 className={classes['offer-card__heading']}>{title}</h3>
        <p className={classes['offer-card__text']}>{text}</p>
        <div className={classes['offer-card__button']}>
          <Button
            as='link'
            type='secondary'
            href={learnMoreLink}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};
