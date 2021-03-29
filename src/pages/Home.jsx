import grafix_logo from '../assets/svg/grafix-logo.svg';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <div className='Home landing'>
      <Nav />
      <div className='landing'>
        <div className='landing__content wrapper'>
          <img src={grafix_logo} alt='grafix logo' />
        </div>
      </div>
    </div>
  );
};

export default Home;
