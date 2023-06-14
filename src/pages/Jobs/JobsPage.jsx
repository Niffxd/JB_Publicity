import Job from '../../components/Job/Job'; //eslint-disable-line
import style from './JobsPage.module.css';

export default function JobsPage ({ jobs }) {
  return (
    <section className={style.jobs__container}>
      <h1>GRANDES CLIENTES</h1>
      {
        jobs.map(job => {
          return (
            <div key={jobs.indexOf(job)} className={style.job__content} style={jobs.indexOf(job) % 2 ? { backgroundColor: 'var(--color-blue)', color: 'var(--color-white)' } : {}}>
              <Job data={job} />
            </div>
          );
        })
      }
    </section>
  );
}
