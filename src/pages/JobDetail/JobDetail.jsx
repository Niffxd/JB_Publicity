import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; //eslint-disable-line
import style from './JobDetail.module.css';

export default function JobPageDetail () {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);

  useEffect(() => {
    if (!state) navigate('/no-encontrado');
    else {
      setJob(state);
    }
  }, [job]);

  return (
    <div className={style.job_detail__container}>
      <div className={style.detail_title}>
        <h1>{job?.title}</h1>
        <button className={style.button_back} onClick={() => navigate(-1)}>◀ Atrás</button>
      </div>
      {
        job?.descriptions.slice(0, 1).map(desc => {
          return (
            <p key={job?.descriptions.indexOf(desc)}>{desc}</p>
          );
        })
      }
      <div className={style.images__container}>
        {
          job?.images.map(image => {
            return (
              <img key={image} src={image} alt={image} />
            );
          })
        }
      </div>
      <button className={style.button_back} onClick={() => navigate(-1)}>◀ Atrás</button>
    </div>
  );
}
