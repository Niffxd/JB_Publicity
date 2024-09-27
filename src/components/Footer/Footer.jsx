import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './Footer.module.css';

export default function Footer ({ logo, data }) {
  const { contact } = data;

  return (
    <footer className={style.footer_container}>
      <Link to='/' onClick={() => window.scrollTo(0, 0)}>
        <div className={style.footer_logo}>
          <img src={logo} alt='logo-footer'/>
        </div>
      </Link>
      <div className={style.contact_container}>
        <div className={style.info_container}>
          <h3>DIRECCIÓN</h3>
          {
            Object.entries(contact).map(item => {
              return (
                <li key={item[0]}>
                  {
                    item[0] === 'call' || item[0] === 'map' || item[0].includes('location')
                      ? <span className={`material-symbols-outlined ${style['material-symbols-outlined']}`}>
                          {
                            item[0].includes('location')
                              ? 'pin_drop'
                              : item[0]
                          }
                        </span>
                      : <span className={style.no_icon}></span>
                    }
                  {
                    item[0] === 'call'
                      ? <a className={style.tel} href='tel:+543812481995'>{item[1]}</a>
                      : item[1]
                  }
                </li>
              );
            })
          }
        </div>
      </div>
    </footer>
  );
}
