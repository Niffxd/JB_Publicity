import Carrousel from '../Carrousel/Carrousel.jsx'; //eslint-disable-line
import style from './Brands.module.css';

export default function Brands ({ images }) {
  return (
    <div className={style.brands__container}>
      <Carrousel images={images}/>
    </div>
  );
}
