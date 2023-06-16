import { useState } from 'react';
import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './Job.module.css';

export default function Job ({ data }) {
  const [manyDesc, SetManyDesc] = useState(1);
  const [infoText, SetInfoText] = useState('Más información');
  const { title, descriptions, images } = data;

  const handlerMoreInfo = () => {
    manyDesc === 1 ? SetManyDesc(-1) : SetManyDesc(1);
    infoText === 'Más información' ? SetInfoText('Menos información') : SetInfoText('Más información');
  };

  return (
    <>
      <img src={images[0]} alt={images[0]} />
      <h2>{title}</h2>
      {
        descriptions.slice(0, manyDesc).map(desc => {
          return (
            <p key={descriptions.indexOf(desc)}>{desc}</p>
          );
        })
      }
      <p className={style.more_info} onClick={handlerMoreInfo}>{infoText}</p>
    </>
  );
}
