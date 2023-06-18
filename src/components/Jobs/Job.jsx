import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './Job.module.css';

export default function Job ({ data }) {
  const { title, descriptions, images } = data;

  return (
    <>
      <div className={style.image} style={{ backgroundImage: `url(${images[0]})` }}/>
      <h2>{title}</h2>
      {
        descriptions.slice(0, 1).map(desc => {
          return (
            <p key={descriptions.indexOf(desc)}>{desc}</p>
          );
        })
      }
    </>
  );
}
