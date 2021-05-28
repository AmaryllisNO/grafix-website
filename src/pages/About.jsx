import Header from '../components/Header';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import SimpleBar from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import PressPhoto1 from '../assets/images/pressphoto1.jpg';
import PressPhoto2 from '../assets/images/pressphoto2.jpg';

const About = () => {
  document.title = 'Grafix | About';
  let pageHeading = document.title.replace('Grafix |', '');

  return (
    <div className='about'>
      <Header />
      <SimpleBar style={{ maxHeight: 900 }}>
        <Heading title={pageHeading} />

        <div className='about__container wrapper wrapper--fade'>
          <div className='about__text'>
            <p className='about__paragraph'>
              Bristol based drum & bass producer Grafix has revitalized his solo
              career, signing exclusively to Hospital Records, and ready to take
              the drum & bass world by the horns. Previously famed for being one
              half of ‘Fred V & Grafix’, Josh Jackson has been at the forefront
              of the genre for over a decade with a trio of collaborative albums
              under his belt. Now after years of success, he’s taken a new
              direction embracing his revived identity as a solo artist.{' '}
            </p>
            <p className='about__paragraph'>
              Widely respected for his clinical mixdowns and impeccable
              production skills, this sharp musical brain is poised for great
              things as he sets on his solo journey. His influences are drawn
              from various genres such as Techno, Electronica and Indie Dance.
              With his productions encompass this broad selection they span a
              range of emotions and sonic frequencies. Grafix’s new solo status
              has seen him venture into darker and more experimental territories
              with his dancefloor primed productions and ethereal soundscapes,
              proving popular, from ‘Distressed’ to ‘Stutter’ and ‘Acid
              Generation’ which reached number 1 in the Beatport Drum & Bass
              chart.{' '}
            </p>{' '}
            <p className='about__paragraph'>
              The past year has been pivotal in Grafix’s solo journey, as the
              development and exploration of his style has seen appreciation
              from dance music connoisseurs including Andy C, Metrik, A.M.C and
              High Contrast. With his inspirations drawing from techno to indie
              rock, Grafix’s remarkable production skill and originality has
              seen him garner radio support from airwave tastemakers in 2020
              such as Rene LaVice, Danny Howard, Charlie Tee, and Mollie
              Collins, and even a collaboration with fellow label extraordinaire
              Metrik on ‘Parallel’.
            </p>
          </div>
          <div className='about__imagecontainer'>
            <img
              src={PressPhoto1}
              alt='Grafix Pressphoto'
              className='about__image'
            />
            <img
              src={PressPhoto2}
              alt='Grafix Pressphoto'
              className='about__image'
            />
          </div>
        </div>
      </SimpleBar>
      <Footer />
    </div>
  );
};

export default About;
