import Header from '../components/Header';
import Heading from '../components/Heading';
import Footer from '../components/Footer';

const Music = () => {
  document.title = 'Grafix | Music';
  let pageHeading = document.title.replace('Grafix |', '');
  return (
    <div>
      <Header />
      <Heading title={pageHeading} />
      <iframe
        title='music'
        src='https://open.spotify.com/embed/artist/27YdXZOMLqvxI2pB5GyqyY'
        height='380'
        width='600'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
        className='wrapper iframe'
      ></iframe>
      <Footer />
    </div>
  );
};

export default Music;
