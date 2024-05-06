import classes from './OffersBlock.module.scss';
import { OffersList } from '../OffersList/OffersList';
import { offers } from '../../data/offers';

export const OffersBlock = () => {
  return (
    <section className={classes['offers-block']}>
      <div className={classes['offers-block__container']}>
        <h2 className={classes['offers-block__heading']}>Offers</h2>
        <OffersList offers={offers} />
      </div>
    </section>
  );
};
