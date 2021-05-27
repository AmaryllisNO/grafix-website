import Header from '../components/Header';
import Heading from '../components/Heading';
import Footer from '../components/Footer';

const Contact = () => {
  document.title = 'Grafix | Contact';
  let pageHeading = document.title.replace('Grafix |', '');

  return (
    <div>
      <Header />
      <Heading title={pageHeading} />
      <form action='https://formsubmit.co/amaryllisno@gmail.com' method='POST'>
        <input type='text' placeholder='Name' name='name' required />
        <input type='email' placeholder='Email Address' name='email' required />
        <textarea
          type='text'
          name='message'
          placeholder='Your message...'
          required
        />
        <button type='submit'>Send</button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
