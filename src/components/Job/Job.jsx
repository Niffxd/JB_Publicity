import { Player } from 'video-react'; //eslint-disable-line
import style from './Job.module.css';
import './video-react.css';
import { useState } from 'react';

export default function Job ({ data }) {
  const [manyDesc, SetManyDesc] = useState(1);
  const [manyPhotos, SetManyPhotos] = useState(1);
  const [infoText, SetInfoText] = useState('Más información');
  const [photosText, SetPhotosText] = useState('Mostrar más fotos');
  const { title, descriptions, images, videos } = data;

  const handlerMoreInfo = () => {
    manyDesc === 1 ? SetManyDesc(-1) : SetManyDesc(1);
    infoText === 'Más información' ? SetInfoText('Menos información') : SetInfoText('Más información');
  };

  const handlerMorePhotos = () => {
    manyPhotos === 1 ? SetManyPhotos(-1) : SetManyPhotos(1);
    photosText === 'Mostrar más fotos' ? SetPhotosText('Ocultar fotos') : SetPhotosText('Mostrar más fotos');
  };

  return (
    <>
      <h2>{title}</h2>
      {
        descriptions.slice(0, manyDesc).map(desc => {
          return (
            <p key={descriptions.indexOf(desc)}>{desc}</p>
          );
        })
      }
      <p className={style.more_info} onClick={handlerMoreInfo}>{infoText}</p>
      {
        images && <div className={style.images__container}>
          {
            images.slice(0, manyPhotos).map(image => {
              return (
                <img key={images.indexOf(image)} src={image} alt={image} />
              );
            })
          }
        </div>
      }
      <p className={style.more_photos} onClick={handlerMorePhotos}>{photosText}</p>
      {
        videos && <div className={style.videos__container}>
          {
            videos.map(video => {
              return (
                <Player
                  playsInline
                  key={videos.indexOf(video)}
                  src={video}
                />
              );
            })
          }
        </div>
      }
    </>
  );
}
