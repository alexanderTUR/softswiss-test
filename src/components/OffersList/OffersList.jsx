import classes from './OffersList.module.scss';
import { OfferCard } from '../OfferCard/OfferCard';

export const OffersList = ({ offers }) => {
  return (
    <ul className={classes['offers-list']}>
      {offers.map((offer, index) => (
        <li key={offer.id} className={classes['offers-list__item']}>
          <OfferCard {...offer} isWide={index % 3 === 0} />
        </li>
      ))}
    </ul>
  );
};
