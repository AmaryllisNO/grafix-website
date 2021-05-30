import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Hamburger from '../assets/svg/Hamburger.svg';
import Cross from '../assets/svg/Cross.svg';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={open ? 'header header--open' : 'header'}>
        <nav className={open ? 'nav nav--open wrapper' : 'nav wrapper'}>
          <div className='nav__hamburger'>
            <button
              className='nav__hamburgerbutton'
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img
                src={!open ? Hamburger : Cross}
                alt='Hamburger Button'
                className={
                  !open
                    ? 'nav__hamburgerimage'
                    : 'nav__hamburgerimage nav__hamburgerimage--fade'
                }
              />
            </button>
          </div>
          <ul className='nav__list'>
            {usePathname() === '/' ? (
              <li className='nav__listitem'>
                <Link to='/'>
                  <span className='nav__link nav__link--active'>Home</span>
                </Link>
              </li>
            ) : (
              <li className='nav__listitem'>
                <Link to='/'>
                  <span className='nav__link'>Home</span>
                </Link>
              </li>
            )}

            {usePathname() === '/about' ? (
              <li className='nav__listitem'>
                <Link to='/about'>
                  <span className='nav__link nav__link--active'>About</span>
                </Link>
              </li>
            ) : (
              <li className='nav__listitem'>
                <Link to='/about'>
                  <span className='nav__link'>About</span>
                </Link>
              </li>
            )}

            {usePathname() === '/music' ? (
              <li className='nav__listitem'>
                <Link to='/music'>
                  <span className='nav__link nav__link--active'>Music</span>
                </Link>
              </li>
            ) : (
              <li className='nav__listitem'>
                <Link to='/music'>
                  <span className='nav__link'>Music</span>
                </Link>
              </li>
            )}

            {usePathname() === '/tour' ? (
              <li className='nav__listitem'>
                <Link to='/tour'>
                  <span className='nav__link nav__link--active'>Tour</span>
                </Link>
              </li>
            ) : (
              <li className='nav__listitem'>
                <Link to='/tour'>
                  <span className='nav__link'>Tour</span>
                </Link>
              </li>
            )}

            {usePathname() === '/livestreams' ? (
              <li className='nav__listitem'>
                <Link to='/livestreams'>
                  <span className='nav__link nav__link--active'>
                    Live streams
                  </span>
                </Link>
              </li>
            ) : (
              <li className='nav__listitem'>
                <Link to='/livestreams'>
                  <span className='nav__link'>Live streams</span>
                </Link>
              </li>
            )}

            {usePathname() === '/contact' ? (
              <li className='nav__listitem'>
                <Link to='/contact'>
                  <span className='nav__link nav__link--active'>Contact</span>
                </Link>
              </li>
            ) : (
              <li className='nav__listitem'>
                <Link to='/contact'>
                  <span className='nav__link'>Contact</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
