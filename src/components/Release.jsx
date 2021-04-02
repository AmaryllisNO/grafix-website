import releaseImage from '../assets/images/release.png';

const Release = ({ release }) => {
  return (
    <div className='release'>
      <div className='release__head '>
        <h2 className='release__heading'>Latest Release</h2>
        <span className='release__date'>Feb 18, 2021</span>
      </div>
      <div className='release__body '>
        <img className='release__image' src={releaseImage} alt='' />
        <div className='release__content'>
          <h3 className='release__title'>
            Koven - World's Collide (Grafix Remix)
          </h3>
          <p className='release__text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            magnam voluptas quidem voluptatum reprehenderit perspiciatis dolorum
            consequuntur soluta repellat cupiditate explicabo mollitia sint.
            Praesentium, illum veniam repellendus at consequatur corrupti, nobis
            aliquid necessitatibus voluptatibus aut unde voluptate inventore,
            quam nostrum.
          </p>
          <div className='release__buttoncontainer'>
            <a className='release__button' href='/'>
              Listen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Release;
