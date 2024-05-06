import { useEffect, useState, useRef, useCallback } from 'react';
import { Burger } from '../Burger/Burger';
import classes from './Header.module.scss';
import Logo from '../../assets/logo.svg';
import CartIcon from '../../assets/cart-icon.svg';
import CartIconHover from '../../assets/cart-icon--hover.svg';

export const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsMenuShown((prev) => !prev);
  }, []);

  const handleOutsideClick = useCallback((event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMenuShown(false);
    }
  }, []);

  const handleResize = useCallback(() => {
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
  }, [isMenuShown]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleOutsideClick, handleResize]);

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
