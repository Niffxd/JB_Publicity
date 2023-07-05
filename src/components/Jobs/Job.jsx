import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './Job.module.css';

export default function Job ({ data }) {
  const { path, reference, title, descriptions, images } = data;

  return (
    <>
      {
        descriptions
          ? <>
              <div className={style.image} style={{ backgroundImage: `url(${images[0]})` }}/>
              <span>{reference}</span>
              <h2>{title}</h2>
              {
                descriptions.slice(0, 1).map(desc => {
                  return (
                    <p key={descriptions.indexOf(desc)}>{desc}</p>
                  );
                })
              }
              <Link to={`${path}`} state={data} id={style[path]}><p>Más información</p></Link>
            </>
          : <div className={style.others__container}>
              <h2>{title}</h2>
              {
                images.map(image => {
                  return (
                    <div key={image}
                      className={style.others__content}
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  );
                })
              }
            </div>
      }
    </>
  );
}
