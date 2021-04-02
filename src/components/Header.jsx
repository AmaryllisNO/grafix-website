import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  return (
    <div className='header'>
      <nav className='nav wrapper'>
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
  );
};

export default Header;
