// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import style from './JobDetail.module.css';

export default function JobPageDetail ({ jobs }) {
  // const params = useParams();

  const { state } = useLocation();
  const { title, descriptions, images } = state;

  return (
    <div className={style.job_detail__container}>
      <img src={`/${images[0]}`} alt={images[0]} />
      <h2>{title}</h2>
      {
        descriptions.slice(0, 1).map(desc => {
          return (
            <p key={descriptions.indexOf(desc)}>{desc}</p>
          );
        })
      }
    </div>
  );
}
