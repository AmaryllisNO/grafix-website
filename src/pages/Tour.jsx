import Header from '../components/Header';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const Tour = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '//widget.songkick.com/2165055/widget.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  document.title = 'Grafix | Tour';
  let pageHeading = document.title.replace('Grafix |', '');
  return (
    <div>
      <Header />
      <Heading title={pageHeading} />
      <div className='wrapper'>
        <a
          href='https://www.songkick.com/artists/2165055'
          class='songkick-widget'
          data-theme='dark'
          data-track-button='on'
          data-detect-style='true'
          data-background-color='transparent'
          data-locale='en'
        >
          GRAFIX TOUR DATES
        </a>
        <script src='//widget.songkick.com/2165055/widget.js'></script>
      </div>

      <Footer />
    </div>
  );
};

export default Tour;
