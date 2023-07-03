import style from './Tools.module.css';

export default function Tools () {
  return (
    <div className={style.gallery_access__container}>
      <h2>¿QUÉ HACEMOS?</h2>
      <div className={style.tools__container}>
        <div className={style.content}>
          <div id={style['image1']} className={style.img} style={{ backgroundImage: 'url("jobs/jb/2.jpg")' }}/> {/* eslint-disable-line */}
          <div className={style.description}>
            <p>Todas las estructuras y carteles son diseñadas y fabricadas en nuestra planta por personal altamente calificado para cada requerimiento.</p>
          </div>
        </div>
        <div className={style.content}>
          <div id={style['image2']} className={style.img} style={{ backgroundImage: 'url("jobs/jb/4.jpg")' }}/> {/* eslint-disable-line */}
          <div className={style.description}>
            <p>Contamos con todas las herramientas y maquinarias específicas para cada tipo de trabajo solicitado.</p>
          </div>
        </div>
        <div className={style.content}>
          <div id={style['image3']} className={style.img} style={{ backgroundImage: 'url("jobs/jb/5.jpg")' }}/> {/* eslint-disable-line */}
          <div className={style.description}>
            <p>Contamos con equipos de alta tecnología desde la impresión hasta la terminación para lograr una excelente calidad.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
