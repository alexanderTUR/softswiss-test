import classes from './Footer.module.scss';
import rocketIcon from '../../assets/rocket-icon.webp';
import rocketIcon2x from '../../assets/rocket-icon@2x.webp';

export const Footer = () => {
  return (
    <footer className={classes['app-footer']}>
      <div className={classes['app-footer__container']}>
        <div className={classes['app-footer__icon-container']}>
          <img
            className={classes['app-footer__icon']}
            src={rocketIcon}
            srcSet={`${rocketIcon} 1x, ${rocketIcon2x} 2x`}
            alt='Rocket.'
            loading='lazy'
          />
        </div>
        <p className={classes['app-footer__heading']}>Exciting space adventure!</p>
      </div>
    </footer>
  );
};
