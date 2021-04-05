import Header from '../components/Header';
import Heading from '../components/Heading';

const Admin = () => {
  document.title = 'Grafix | Admin';
  let pageHeading = document.title.replace('Grafix |', '');
  return (
    <div>
      <Header />
      <Heading title={pageHeading} />
    </div>
  );
};

export default Admin;
