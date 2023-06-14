import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './NotFoundPage.module.css';

export default function NotFoundPage ({ logo, categories }) {
  return (
    <div className={style.not_found__container}>
      <img src={logo} alt='logo' />
      <h2>¿Te perdiste?</h2>
      <ul className={style.category_list}>
        {
          categories.map(cat => {
            return (
              cat.path
                ? <li key={categories.indexOf(cat)}>
                    <Link to={cat.path}>{cat.category}</Link>
                  </li>
                : ''
            );
          })
        }
      </ul>
    </div>
  );
}
