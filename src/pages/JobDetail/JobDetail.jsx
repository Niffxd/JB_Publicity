import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; //eslint-disable-line
import style from './JobDetail.module.css';
import './buttons.css';

export default function JobPageDetail () {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [actualImg, setImg] = useState(null);
  const [job, setJob] = useState(null);

  const handlerPreview = (image) => {
    setImg(null);
    setImg(image);
    document.getElementById('preview_image')?.showModal();
    document.getElementById('preview_image')?.classList.add(style.show_modal);
  };

  const handleCloseModal = () => {
    document.getElementById('preview_image').close();
    document.getElementById('preview_image').classList.remove(style.show_modal);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <img onClick={() => handlerPreview(image)} key={image} src={image} alt={image} />
            );
          })
        }
      </div>
      <button className={style.button_back} onClick={() => navigate(-1)}>◀ Atrás</button>
      {
        job
          ? <dialog id='preview_image' className={style.preview__container}>
              <div className={style.preview__content}>
                <div className={style.preview_image}>
                  <img src={actualImg} alt={actualImg} />
                  <div className={style.controls}>
                    {
                      job?.images?.indexOf(actualImg) > 0
                        ? <button onClick={() => setImg(job.images[(job?.images?.indexOf(actualImg)) - 1])}>
                            <span className='material-symbols-outlined'>
                              chevron_left
                            </span>
                          </button>
                        : <button onClick={() => setImg(job.images[(job?.images?.length) - 1])}>
                            <span className='material-symbols-outlined'>
                              chevron_left
                            </span>
                          </button>
                    }
                    {
                      job?.images?.indexOf(actualImg) < job?.images?.length - 1
                        ? <button onClick={() => setImg(job.images[(job?.images?.indexOf(actualImg)) + 1])}>
                            <span className='material-symbols-outlined'>
                              chevron_right
                            </span>
                          </button>
                        : <button onClick={() => setImg(job.images[0])}>
                            <span className='material-symbols-outlined'>
                              chevron_right
                            </span>
                          </button>
                      }
                  </div>
                </div>
                <button onClick={handleCloseModal} id='cancel'>Volver</button>
              </div>
            </dialog>
          : ''
      }
    </div>
  );
}
