import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaSoundcloud } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__socials wrapper'>
        <ul className='footer__sociallist'>
          <li className='footer__socialitem'>
            <a
              href='https://twitter.com/grafixmusicuk'
              className='footer__sociallink'
            >
              <FaTwitter />
            </a>
          </li>
          <li className='footer__socialitem'>
            <a
              href='https://www.instagram.com/grafixmusicuk/'
              className='footer__sociallink'
            >
              <FaInstagram />
            </a>
          </li>
          <li className='footer__socialitem'>
            <a
              href='https://www.facebook.com/grafixmusicuk/'
              className='footer__sociallink'
            >
              <FaFacebook />
            </a>
          </li>
          <li className='footer__socialitem'>
            <a
              href='https://www.youtube.com/channel/UCoTJT4FBSLhrBSJiqogzbjg'
              className='footer__sociallink'
            >
              <FaYoutube />
            </a>
          </li>
          <li className='footer__socialitem'>
            <a
              href='https://www.twitch.tv/grafixmusicuk'
              className='footer__sociallink'
            >
              <FaTwitch />
            </a>
          </li>
          <li className='footer__socialitem'>
            <a
              href='https://open.spotify.com/artist/27YdXZOMLqvxI2pB5GyqyY?si=tQZY63c-Qca_ft75AJ--wA'
              className='footer__sociallink'
            >
              <FaSpotify />
            </a>
          </li>
          <li className='footer__socialitem'>
            <a
              href='https://soundcloud.com/grafixmusicuk'
              className='footer__sociallink'
            >
              <FaSoundcloud />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
