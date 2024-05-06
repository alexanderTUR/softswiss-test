import React, { useEffect, useState, useRef } from 'react';
import classes from './Header.module.scss';
import Logo from '../../assets/logo.svg';
import CartIcon from '../../assets/cart-icon.svg';
import CartIconHover from '../../assets/cart-icon--hover.svg';
import { Burger } from '../Burger/Burger';

export const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuShown &&
        !event.target.closest(`.${classes['app-header__nav']}`) &&
        !event.target.closest(`.${classes['app-header__burger']}`)
      ) {
        setIsMenuShown(false);
      }
    };

    const handleResize = () => {
      const links = navRef.current.querySelectorAll('a');
      if (window.matchMedia('(min-width: 1024px)').matches) {
        links.forEach((link) => {
          link.tabIndex = 0;
        });
      } else {
        links.forEach((link) => {
          link.tabIndex = isMenuShown ? 0 : -1;
        });
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuShown]);

  return (
    <header className={classes['app-header']}>
      <div className={classes['app-header__container']}>
        <a className={classes['app-header__logo-link']} href='#'>
          <img className={classes['app-header__logo']} src={Logo} alt='Company Logo' />
        </a>
        <div className={classes['app-header__burger']}>
          <Burger toggle={toggleMenu} isActive={isMenuShown} />
        </div>
        <nav
          ref={navRef}
          className={`${classes['app-header__nav']} ${isMenuShown ? classes['app-header__nav--is-shown'] : ''}`}
          aria-hidden={!isMenuShown}
          id='navigation'
        >
          <ul className={classes['app-header__nav-list']}>
            <li className={classes['app-header__nav-item']}>
              <a className={classes['app-header__nav-link']} href='#'>
                Home
              </a>
            </li>
            <li className={classes['app-header__nav-item']}>
              <a className={classes['app-header__nav-link']} href='#'>
                Products
              </a>
            </li>
            <li className={classes['app-header__nav-item']}>
              <a
                className={`${classes['app-header__nav-link']} ${classes['app-header__nav-link--with-icon']}`}
                href='#'
              >
                <img src={CartIcon} alt='View cart' className={classes['app-header__nav-icon']} />
                <img
                  src={CartIconHover}
                  alt='View cart'
                  className={`${classes['app-header__nav-icon']} ${classes['app-header__nav-icon--on-hover']}`}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
