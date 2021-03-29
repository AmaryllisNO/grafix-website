import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav wrapper'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/music'>Music</Link>
      <Link to='/tour'>Tour</Link>
      <Link to='/livestreams'>Livestreams</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
};

export default Nav;
