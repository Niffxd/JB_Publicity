import style from './Brands.module.css';

export default function Brands ({ brands }) {
  return (
    <div className={style.brands__container}>
      <h2>¡SEGUIMOS CRECIENDO!</h2>
      <div className={style.brands}>
        {
          brands.map(({ src, title }) => {
            return (
              <img key={title} src={src} alt={title} />
            );
          })
        }
      </div>
    </div>
  );
}
