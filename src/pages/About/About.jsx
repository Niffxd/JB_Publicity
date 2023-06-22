import { useEffect } from 'react';
import style from './About.module.css';

export default function AboutPage ({ data }) {
  const { weAre, coverage, company } = data;

  const handlerShowUp = () => {
    document.getElementById('we_are_title').classList.toggle(`${style.rotate}`);
    document.getElementById('we_are_description').classList.toggle(`${style.show_container}`);
  };

  const handlerShowCoverage = () => {
    document.getElementById('coverage').classList.toggle(`${style.rotate}`);
    document.getElementById('coverage_description').classList.toggle(`${style.show_container}`);
  };

  const handlerShowContact = () => {
    document.getElementById('contact').classList.toggle(`${style.rotate}`);
    document.getElementById('contact_description').classList.toggle(`${style.show_container}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.about_page__container}>
      <div id='we_are_title' className={style.title_container} onClick={() => handlerShowUp()}>
        <h1>QUIENES SOMOS</h1>
        <span className='material-symbols-outlined'>expand_more</span>
      </div>
      <section id='we_are_description' className={style.about_description__container}>
        <div className={style.about_description}>
          {
            weAre.description.map(paragraph => {
              return <p key={weAre.description.indexOf(paragraph)}>{paragraph}</p>;
            })
          }
        </div>
        <div className={style.departments__container}>
          {
            weAre.departments.map(department => {
              return (
                <div key={weAre.departments.indexOf(department)} className={style.department__content}>
                  <h3>{department.title}</h3>
                  {
                    department.description.map(paragraph => {
                      return <p key={department.description.indexOf(paragraph)}>{paragraph}</p>;
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </section>
      <hr />
      <div id='coverage' className={style.coverage__container} onClick={() => handlerShowCoverage()}>
        <h1>CAPACIDAD DE COBERTURA GEOGRÁFICA</h1>
        <span className='material-symbols-outlined'>expand_more</span>
      </div>
      <section id='coverage_description' className={style.coverage_description__container}>
        <img src={weAre.coverageImg} alt='coverage' />
        <div className={style.coverage_description}>
          <h3>{coverage.description}</h3>
          <h3>{coverage.distances.title}:</h3>
          <div className={style.states_container}>
            {
              coverage.distances.states.map(({ state, long }) => {
                return (
                  <div className={style.state_content} key={state}>
                    <p>{state}</p>
                    <p>{long} KM</p>
                  </div>
                );
              })
            }
          </div>
          <h3>{coverage.distances.description}</h3>
        </div>
      </section>
      <hr />
      <div id='contact' className={style.contact__container} onClick={() => handlerShowContact()}>
        <h1>CONTACTO</h1>
        <span className='material-symbols-outlined'>expand_more</span>
      </div>
      <section id='contact_description' className={style.contact_description__container}>
        {
          company.map(({ name, tel, mail, position, textNumber }) => {
            return (
              <div key={name} className={style.contact_content}>
                <h3>{name}</h3>
                {mail && <p>Email: <a className={style.tel} href={`mailto:${mail}`}>{mail}</a></p>}
                {position && <p>{position}</p>}
                <p>Teléfono: <a className={style.tel} href={`tel:${textNumber}`}>{tel}</a></p>
              </div>
            );
          })
        }
      </section>
      <hr />
    </div>
  );
}
