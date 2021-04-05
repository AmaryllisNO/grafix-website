import Header from '../components/Header';
import Heading from '../components/Heading';

const Livestreams = () => {
  document.title = 'Grafix | Live Streams';
  let pageHeading = document.title.replace('Grafix |', '');
  return (
    <div>
      <Header />
      <Heading title={pageHeading} />
    </div>
  );
};

export default Livestreams;
