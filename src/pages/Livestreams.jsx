import Header from '../components/Header';
import Heading from '../components/Heading';
import Footer from '../components/Footer';

const Livestreams = () => {
  document.title = 'Grafix | Live Streams';
  let pageHeading = document.title.replace('Grafix |', '');
  return (
    <div>
      <Header />
      <Heading title={pageHeading} />
      <Footer />
    </div>
  );
};

export default Livestreams;
