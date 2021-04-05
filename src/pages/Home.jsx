import axios from 'axios';
import { useEffect, useState } from 'react';

import grafix_logo from '../assets/svg/grafix-logo.svg';
import Header from '../components/Header';
import Release from '../components/Release';
import Footer from '../components/Footer';

const Home = () => {
  document.title = 'Grafix';

  const [release, setRelease] = useState([]);
  const [releaseImage, setReleaseImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelease = async () => {
      try {
        setLoading(true);
        if (loading) {
          console.log('loading..');
        }
        const res = await axios.get('http://localhost:1337/latest-release');

        if (res.status === 200) {
          setRelease(res.data);
          setReleaseImage(res.data.release_image.url);
          console.log('call successful');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRelease();
  }, []);

  return (
    <>
      <Header />
      <div className='Home landing'>
        <div className='landing__content wrapper'>
          <img className='landing__logo' src={grafix_logo} alt='grafix logo' />
          {loading ? (
            <div>Loading...</div>
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
