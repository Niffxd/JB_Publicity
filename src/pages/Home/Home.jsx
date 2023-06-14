import { useEffect } from 'react';
import { Link } from 'react-router-dom'; //eslint-disable-line
import Carrousel from '../../components/Carrousel/Carrousel.jsx'; //eslint-disable-line
import Banner from '../../components/Banner/Banner.jsx'; //eslint-disable-line
import Brands from '../../components/Brands/Brands.jsx'; //eslint-disable-line
import Methodologies from '../../components/Methodologies/Methodologies.jsx'; //eslint-disable-line
import Jobs from '../../pages/Jobs/JobsPage.jsx'; //eslint-disable-line
import Tools from '../../components/Tools/Tools.jsx'; //eslint-disable-line
import style from './HomePage.module.css';

export default function HomePage ({ data }) {
  const { slider, brands, services, jobs } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.home_page__container}>
      <Carrousel images={slider}/>
      <Banner services={services}/>
      <Methodologies />
      <Jobs jobs={jobs}/>
      {/* <Link to='/galeria'>
        <button className={style.button}>Trabajos realizados</button>
      </Link> */}
      <Tools />
      <Brands brands={brands}/>
    </div>
  );
}
