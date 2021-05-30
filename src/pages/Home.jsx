import axios from 'axios';
import { useEffect, useState } from 'react';

import grafix_logo from '../assets/svg/grafix-logo.svg';
import Header from '../components/Header';
import Release from '../components/Release';
import Footer from '../components/Footer';
import { BASE_URL, LATEST_RELEASE_PATH } from '../utils/constants';

const Home = () => {
  document.title = 'Grafix';

  const [release, setRelease] = useState([]);
  const [releaseImage, setReleaseImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        setLoading(true);

        const res = await axios.get(`${BASE_URL}${LATEST_RELEASE_PATH}`);

        if (res.status === 200) {
          setRelease(res.data);
          setReleaseImage(res.data.image_url);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRelease();
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className='Home landing'>
          <div className='landing__content wrapper'>
            <img
              className='landing__logo'
              src={grafix_logo}
              alt='grafix logo'
            />

            <div className='loader'>
              <div className='lds-facebook'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className='Home landing'>
          <div className='landing__content wrapper'>
            <img
              className='landing__logo'
              src={grafix_logo}
              alt='grafix logo'
            />

            <div>{error.toString()}</div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  if (!error && !loading)
    return (
      <>
        <Header />
        <div className='Home landing'>
          <div className='landing__content wrapper'>
            <img
              className='landing__logo'
              src={grafix_logo}
              alt='grafix logo'
            />
            {loading ? (
              <div className='lds-facebook'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <Release release={release} releaseImage={releaseImage} />
            )}
          </div>
          <Footer />
        </div>
      </>
    );
};

export default Home;
