import Header from '../components/Header';
import Heading from '../components/Heading';

const Music = () => {
  document.title = 'Grafix | Music';
  let pageHeading = document.title.replace('Grafix |', '');
  return (
    <div>
      <Header />
      <Heading title={pageHeading} />
    </div>
  );
};

export default Music;
