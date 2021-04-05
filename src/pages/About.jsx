import Header from '../components/Header';
import Heading from '../components/Heading';
import Footer from '../components/Footer';

const About = () => {
  document.title = 'Grafix | About';
  let pageHeading = document.title.replace('Grafix |', '');

  return (
    <div className='About'>
      <Header />
      <Heading title={pageHeading} />
      <Footer />
    </div>
  );
};

export default About;
