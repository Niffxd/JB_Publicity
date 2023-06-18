import style from './Carrousel.module.css';

export default function Carrousel ({ images }) {
  return (
    <div className={style.carrousel__container}>
      <ul className={style.carrousel__content} style={{ width: `${images.length * 100}%` }}>
      {
        images.map(image => {
          return (
            <li key={image.title}>
              <div style={{ backgroundImage: `url(${image.src})` }}/>
            </li>
          );
        })
      }
      </ul>
    </div>
  );
}
