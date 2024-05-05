import classes from './OffersBlock.module.scss';
import { OffersList } from '../OffersList/OffersList';

export const OffersBlock = () => {
  return (
    <section className={classes['offers-block']}>
      <h2>Offers</h2>
      <OffersList />
    </section>
  );
};
