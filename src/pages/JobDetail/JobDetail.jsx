import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; //eslint-disable-line
import style from './JobDetail.module.css';
import './buttons.css';

export default function JobPageDetail () {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [actualImg, setImg] = useState(null);
  const [job, setJob] = useState(null);
  const [active, setActive] = useState(false);

  const handlerPreview = (image) => {
    setImg(null);
    setImg(image);
    if (!active) setActive(true);
    document.getElementById('preview_image')?.showModal();
    document.getElementById('preview_image')?.classList.add(style.show_modal);
  };

  const handlerPrevImage = () => {
    if (!job?.images?.indexOf(actualImg)) setImg(job.images[(job?.images?.length) - 1]);
    else setImg(job.images[(job?.images?.indexOf(actualImg)) - 1]);
  };

  const handlerNextImage = () => {
    if (job?.images?.indexOf(actualImg) < job?.images?.length - 1) setImg(job.images[(job?.images?.indexOf(actualImg)) + 1]);
    else setImg(job.images[0]);
  };

  const handleCloseModal = () => {
    if (active) setActive(false);
    document.getElementById('preview_image').close();
    document.getElementById('preview_image').classList?.remove(style.show_modal);
  };

  const handlePressKey = (event) => {
    if (event.key === 'Escape') handleCloseModal();
    if (event.key === 'ArrowRight' && active) handlerPrevImage();
    if (event.key === 'ArrowLeft' && active) handlerNextImage();
  };

  document.addEventListener('keydown', handlePressKey);

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
                    <button onClick={handlerPrevImage}>
                      <span className='material-symbols-outlined'>
                        chevron_left
                      </span>
                    </button>
                    <button onClick={handlerNextImage}>
                      <span className='material-symbols-outlined'>
                        chevron_right
                      </span>
                    </button>
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
