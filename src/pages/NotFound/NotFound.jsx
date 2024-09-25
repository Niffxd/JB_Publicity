import { Link } from 'react-router-dom'; //eslint-disable-line
import notFound from '../../assets/images/logo/404.svg';
import style from './NotFoundPage.module.css';

export default function NotFoundPage ({ categories }) {
  return (
    <div className={style.not_found__container}>
      <img src={notFound} alt='logo'/>
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
