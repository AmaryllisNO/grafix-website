import releaseImageTemp from '../assets/images/release.png';

const Release = ({ release, releaseImage }) => {
  return (
    <div className='release'>
      <div className='release__head '>
        <h2 className='release__heading'>Latest Release</h2>
        <span className='release__date'>{release.release_date}</span>
      </div>
      <div className='release__body'>
        <img
          className='release__image'
          src={releaseImage}
          alt={release.title}
        />
        <div className='release__content'>
          <h3 className='release__title'>{release.title}</h3>
          <p className='release__text'>{release.description}</p>
          <div className='release__buttoncontainer'>
            <a className='release__button' href={release.button_url}>
              Listen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
