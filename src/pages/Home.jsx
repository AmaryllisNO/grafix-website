import grafix_logo from '../assets/svg/grafix-logo.svg';
import Header from '../components/Header';
import Release from '../components/Release';

const Home = () => {
  document.title = 'Grafix';

  console.log(document);
  return (
    <div className='Home landing'>
      <Header />

      <div className='landing__content wrapper'>
        <img className='landing__logo' src={grafix_logo} alt='grafix logo' />
        <Release />
      </div>
    </div>
  );
};

export default Home;
