import style from './Methodologies.module.css';

export default function Methodologies () {
  return (
    <div className={style.methodologies__container}>
      <h2>METODOLOGIA DE TRABAJO</h2>
      <div className={style.methodologies__content}>
        <img src={'jobs/jb/1.jpg'} alt='photo3m' />
        <div className={style.description}>
          <p>Bajo el programa de 3M, JB COMPAÑÍA PUBLICITARIA SRL fue certificada como impresor, fabricante e instalador, dando cumplimiento con todos los requisitos y condiciones establecidos por 3M, con el beneficio del prestigio y confiabilidad que dicho reconocimiento provee, como así también una mejora en su modelo de negocios al estandarizar los procesos de fabricación e instalación, maximizando sus niveles de productividad.</p>
        </div>
      </div>
    </div>
  );
}
