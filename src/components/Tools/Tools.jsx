import { Link } from 'react-router-dom'; //eslint-disable-line
import photo1 from '../../assets/images/services/corp1.jpg';
// import photo2 from '../../assets/images/services/corp2.jpg';
import photo3 from '../../assets/images/services/corp3.jpg';
// import photo4 from '../../assets/images/services/corp4.jpg';
import style from './Tools.module.css';

export default function Tools () {
  return (
    <div className={style.gallery_access__container}>
      <div className={style.content}>
        <img src={photo1} alt='photo1' />
        <div className={style.description}>
          <p>Todas las piezas se realizan en nuestros talleres por personal calificado para cada requerimiento.</p>
        </div>
      </div>
      <div className={style.content}>
        <img src={photo3} alt='photo3' />
        <div className={style.description}>
          <p>Contamos con todas las herramientas y maquinaria específica para cada tipo de trabajo solicitado.</p>
        </div>
      </div>
    </div>
  );
}
