import { useState } from 'react';
import classes from './HeroBlock.module.scss';
import earthImage from '../../assets/earth.webp';
import earthImage2x from '../../assets/earth@2x.webp';
import { Button } from '../Button/Button';

export const HeroBlock = () => {
  const [hover, setHover] = useState(false);
  const heroClasses = `${classes['hero-block']} ${hover ? classes['hero-block--hover'] : ''}`;

  return (
    <section className={heroClasses}>
      <div className={classes['hero-block__container']}>
        <div className={classes['hero-block__image-container']}>
          <img
            className={classes['hero-block__image']}
            src={earthImage}
            srcSet={`${earthImage} 1x, ${earthImage2x} 2x`}
            alt='Stylized Earth with a rocket circling around it.'
            width='300'
            height='335'
            loading='lazy'
          />
        </div>
        <div className={classes['hero-block__content']}>
          <h1 className={classes['hero-block__heading']}>
            Discover the vast expanses of{' '}
            <span className={classes['hero-block__heading--accent']}>space</span>
          </h1>
          <p className={classes['hero-block__text']}>
            Where the possibilities are{' '}
            <span className={classes['hero-block__text--accent']}>endless!</span>
          </p>
          <div className={classes['hero-block__btn']}>
            <Button
              as='link'
              href='#'
              type='primary'
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
