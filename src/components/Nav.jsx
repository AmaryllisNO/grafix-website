import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  return (
    <div className='navcontainer'>
      <nav className='nav wrapper'>
        <div className='nav__content wrapper'>
          {usePathname() === '/' ? (
            <nav className='nav__linkcontainer'>
              <Link to='/'>
                <span className='nav__link nav__link--active'>Home</span>
              </Link>
            </nav>
          ) : (
            <nav className='nav__linkcontainer'>
              <Link to='/'>
                <span className='nav__link'>Home</span>
              </Link>
            </nav>
          )}

          {usePathname() === '/about' ? (
            <nav className='nav__linkcontainer'>
              <Link to='/about'>
                <span className='nav__link nav__link--active'>About</span>
              </Link>
            </nav>
          ) : (
            <nav className='nav__linkcontainer'>
              <Link to='/about'>
                <span className='nav__link'>About</span>
              </Link>
            </nav>
          )}

          {usePathname() === '/music' ? (
            <nav className='nav__linkcontainer'>
              <Link to='/music'>
                <span className='nav__link nav__link--active'>Music</span>
              </Link>
            </nav>
          ) : (
            <nav className='nav__linkcontainer'>
              <Link to='/music'>
                <span className='nav__link'>Music</span>
              </Link>
            </nav>
          )}

          {usePathname() === '/tour' ? (
            <nav className='nav__linkcontainer'>
              <Link to='/tour'>
                <span className='nav__link nav__link--active'>Tour</span>
              </Link>
            </nav>
          ) : (
            <nav className='nav__linkcontainer'>
              <Link to='/tour'>
                <span className='nav__link'>Tour</span>
              </Link>
            </nav>
          )}

          {usePathname() === '/livestreams' ? (
            <nav className='nav__linkcontainer'>
              <Link to='/livestreams'>
                <span className='nav__link nav__link--active'>
                  Live streams
                </span>
              </Link>
            </nav>
          ) : (
            <nav className='nav__linkcontainer'>
              <Link to='/livestreams'>
                <span className='nav__link'>Live streams</span>
              </Link>
            </nav>
          )}

          {usePathname() === '/contact' ? (
            <nav className='nav__linkcontainer'>
              <Link to='/contact'>
                <span className='nav__link nav__link--active'>Contact</span>
              </Link>
            </nav>
          ) : (
            <nav className='nav__linkcontainer'>
              <Link to='/contact'>
                <span className='nav__link'>Contact</span>
              </Link>
            </nav>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
