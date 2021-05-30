import Header from '../components/Header';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import SimpleBar from 'simplebar-react';
import { useState, useEffect } from 'react';
import { YOUTUBE_API_KEY } from '../utils/constants';

const YOUTUBE_PLAYLIST_ITEM_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export const Livestreams = () => {
  const [apiData, setApiData] = useState(null);
  const [videoItems, setVideoItems] = useState([]);

  useEffect(() => {
    async function getServerSideProps() {
      const res = await fetch(
        `${YOUTUBE_PLAYLIST_ITEM_API}?part=snippet&playlistId=PLrSffyGT4XK1DQOUe0FQ7pV3DFRwU_K5n&maxResults=7&key=${YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      if (data) {
        setApiData(data);
        setVideoItems(data.items);
      }
    }
    getServerSideProps();
  }, []);

  document.title = 'Grafix | Live Streams';
  let pageHeading = document.title.replace('Grafix |', '');

  /* setVideoItems(apiData.items);
  console.log(videoItems); */

  if (apiData) {
    return (
      <div>
        <Header />
        <SimpleBar style={{ maxHeight: 900 }}>
          <Heading title={pageHeading} />

          <div className='wrapper'>
            {videoItems[0] ? (
              <li>
                <iframe
                  width='100%'
                  height='600'
                  src={`https://www.youtube.com/embed/${videoItems[0].snippet.resourceId.videoId}`}
                  title='YouTube video player'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </li>
            ) : (
              ''
            )}

            <ul className='grid'>
              {apiData.items.slice(1).map((item) => {
                //console.log('item', item);
                const { id, snippet = {} } = item;
                const { resourceId } = snippet;

                return (
                  <li key={id}>
                    <iframe
                      width='100%'
                      height='300'
                      src={`https://www.youtube.com/embed/${resourceId.videoId}`}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </li>
                );
              })}
            </ul>
          </div>
        </SimpleBar>
        <Footer />
      </div>
    );
  }

  if (!apiData) {
    return (
      <div>
        <Header />
        <Heading title={pageHeading} />

        <Footer />
      </div>
    );
  }
};

export default Livestreams;
