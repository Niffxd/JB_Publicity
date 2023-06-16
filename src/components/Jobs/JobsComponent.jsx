import Job from './Job'; //eslint-disable-line
import style from './JobsComponent.module.css';

export default function JobsComponent ({ jobs }) {
  return (
    <section className={style.jobs__container}>
      <h1>GRANDES CLIENTES</h1>
      {
        jobs.map(job => {
          return (
            <div
              key={jobs.indexOf(job)}
              className={style.job__content}
              style={jobs.indexOf(job) % 2
                ? { backgroundColor: 'var(--color-blue)', color: 'var(--color-white)', textAlign: 'right' }
                : {}}>
              <Job data={job} />
            </div>
          );
        })
      }
    </section>
  );
}
