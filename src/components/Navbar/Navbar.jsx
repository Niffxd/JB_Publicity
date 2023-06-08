// import { useState, useEffect } from 'react';
import { Link, useNavigate, useHref } from 'react-router-dom'; //eslint-disable-line
import Budget from '../Budget/Budget.jsx' //eslint-disable-line
import style from './Navbar.module.css';
import modalStyle from '../Budget/Budget.module.css';

export default function Navbar ({ logo, data }) {
  const { categories } = data;

  const handleMenu = () => {
    if (!document.getElementById('menu').classList.value.includes(`${style['show-menu']}`)) {
      document.getElementById('menu').classList.add(`${style['show-menu']}`);
    } else {
      document.getElementById('menu').classList.remove(`${style['show-menu']}`);
    }

    if (!document.getElementById('menu-links').classList.value.includes(`${style['show-menu-links']}`)) {
      document.getElementById('menu-links').classList.add(`${style['show-menu-links']}`);
    } else {
      document.getElementById('menu-links').classList.remove(`${style['show-menu-links']}`);
    }

    window.addEventListener('click', event => {
      if (!document.getElementById('menu').contains(event.target) && !document.getElementById('menu-links').contains(event.target)) {
        document.getElementById('menu-links').classList.remove(`${style['show-menu-links']}`);
        document.getElementById('menu').classList.remove(`${style['show-menu']}`);
      }
    });
  };

  // const href = useHref();
  // const titlePage = (href.substring(1, 2).toUpperCase() + href.substring(2)).replace(/-|%20/, ' ');
  // const navigate = useNavigate();
  // const [color, setColor] = useState(false);

  // window.addEventListener('scroll', () => {
  //   window.scrollY >= 10 ? setColor(true) : setColor(false);
  // });

  const showModal = () => {
    handleMenu();
    document.getElementById('modal').classList.add(modalStyle.budget__container);
  };

  // useEffect(() => {
  //   document.title = href === '/' ? 'JB Compañía Publicitaria' : href === '/not-found' ? '😲 Página no encontrada' : titlePage;
  // }, [href]);

  return (
    <nav className={style.navbar_container}>
      <Link to='/'>
        <img className={style.logo} src={logo} alt="logo" height={4}/>
      </Link>
      <div className={style.navbar_content}>
        <button id='menu' className={style.menu} onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id='menu-links' className={style.menu_links}>
          {
            categories.map(({ category, path }) => {
              return path
                ? <Link className={style.link} key={category} to={path} onClick={handleMenu}>
                    <li>{category}</li>
                  </Link>
                : <Link key={category} className={style.link} onClick={showModal}>
                    <li>{category}</li>
                  </Link>;
            })
          }
        </ul>
        <Budget/>
      </div>
    </nav>
  );
}
