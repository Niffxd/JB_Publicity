import { Carousel } from 'react-responsive-carousel'; //eslint-disable-line
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import style from './Carrousel.module.css';

export default function Carrousel ({ images }) {
  return (
    <div className={style.carrousel__container}>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        showArrows={false}>
        {
          images.map(image => {
            return (
              <div key={image.title}>
                <img src={image.src} />
              </div>
            );
          })
        }
    </Carousel>
    </div>
  );
}
