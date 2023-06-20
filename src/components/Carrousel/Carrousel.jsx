import { useState } from 'react'; //eslint-disable-line
import { Carousel } from 'react-responsive-carousel'; //eslint-disable-line
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './Carrousel.module.css';

export default function Carrousel ({ images }) {
  const [bgImage, setBgImage] = useState(images[0].src);

  const handlerBgImage = event => {
    setBgImage(images[event].src);
  };

  return (
    <div className={style.carrousel__container}>
      <div className={style.background__container} style={{ backgroundImage: `url(${bgImage})` }} />
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        onChange={handlerBgImage}
      >
        {
          images.map(({ src, title }) => {
            return (
              <img key={title} src={src} alt={title} />
            );
          })
        }
      </Carousel>
    </div>
  );
}
