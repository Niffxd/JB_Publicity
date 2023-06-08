import style from './Banner.module.css';

export default function Banner ({ services }) {
  return (
    <div className={style.banner__container}>
      {
        services.map(({ title, description, icon }) => {
          return (
            <section key={title} className={style.service__container}>
              <span className='material-symbols-outlined'>
                {icon}
              </span>
              <h2>{title}</h2>
              <p>{description}</p>
            </section>
          );
        })
      }
    </div>
  );
}
