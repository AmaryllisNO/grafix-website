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
      <div className='wrapper'>
        <form
          action='https://formsubmit.co/info@grafixmusic.com'
          method='POST'
          className='form'
        >
          <label htmlFor='name'>Name *</label>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            className='form__input'
          />
          <label htmlFor='email'>E-mail *</label>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            required
            className='form__input'
          />
          <label htmlFor='subject'>Subject *</label>
          <input
            type='subject'
            placeholder='Subject Address'
            name='subject'
            required
            className='form__input'
          />
          <label htmlFor='message'>Message *</label>
          <textarea
            type='text'
            name='message'
            placeholder='Your message...'
            required
            className='form__input'
          />
          <button type='submit' className='form__button'>
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
