import style from './Tools.module.css';

export default function Tools () {
  return (
    <div className={style.gallery_access__container}>
      <div className={style.content}>
        <div className={style.description}>
          <p>Todas las piezas se realizan en nuestros talleres por personal calificado para cada requerimiento.</p>
        </div>
        <img src={'jobs/jb/2.jpg'} alt='photo1' />
      </div>
      <div className={style.content}>
        <div className={style.description}>
          <p>Contamos con todas las herramientas y maquinaria específica para cada tipo de trabajo solicitado.</p>
        </div>
        <img src={'jobs/jb/4.jpg'} alt='photo2' />
      </div>
    </div>
  );
}
