import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel'; //eslint-disable-line
import style from './Carrousel.module.css';

export default function Carrousel ({ images }) {
  return (
    <div className={style.carrousel__container}>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
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
