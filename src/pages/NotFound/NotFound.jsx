import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './NotFoundPage.module.css';

export default function NotFoundPage ({ logo, categories }) {
  return (
    <div className={style.not_found__container}>
      <img src={logo} alt='logo' />
      <div className={style.category__container}>
        <h2>¿Te perdiste?</h2>
        <ul className={style.category_list}>
          {
            categories.map(category => {
              return (
                category.path
                  ? <li key={categories.indexOf(category)}>
                      <Link to={category.path}>{category.category}</Link>
                    </li>
                  : ''
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}
