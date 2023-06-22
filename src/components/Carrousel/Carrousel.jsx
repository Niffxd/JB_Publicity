import { useState, useEffect } from 'react'; //eslint-disable-line
import { Carousel } from 'react-responsive-carousel'; //eslint-disable-line
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './Carrousel.module.css';

export default function Carrousel ({ images, imagesLarge }) {
  const [actualImages, setImages] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    windowSize < 1024
      ? setImages(images)
      : setImages(imagesLarge);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [window.innerWidth]);

  return (

    <div className={style.carrousel__container}>
      <div className={style.background__container} />
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        >
        {
          actualImages?.map(({ src, title }) => {
            return (
              <img key={title} src={src} alt={title} />
            );
          })
        }
      </Carousel>
    </div>
  );
}
