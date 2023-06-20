import { useState, useEffect } from 'react';
import Job from './Job'; //eslint-disable-line
import style from './JobsComponent.module.css';

export default function JobsComponent ({ jobs }) {
  const [bgColor, setBgColor] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    windowSize >= 768
      ? setBgColor(true)
      : setBgColor(false);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [window.innerWidth]);

  return (
    <section className={style.jobs__container}>
      <h1>NUESTRO TRABAJO</h1>
      {
        jobs.map(job => {
          return (
            <div
              key={jobs.indexOf(job)}
              className={style.job__content}
              style={!bgColor
                ? jobs.indexOf(job) % 2
                  ? { backgroundColor: 'var(--color-blue)', color: 'var(--color-white)', textAlign: 'right' }
                  : {}
                : jobs.indexOf(job) !== 0 && jobs.indexOf(job) !== 3 && jobs.indexOf(job) !== 4
                  ? { backgroundColor: 'var(--color-blue)', color: 'var(--color-white)', textAlign: 'right' }
                  : {}
                }>
              <Job data={job} />
            </div>
          );
        })
      }
    </section>
  );
}
