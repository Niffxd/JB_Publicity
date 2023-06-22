import { useEffect } from 'react';
import Carrousel from '../../components/Carrousel/Carrousel.jsx'; //eslint-disable-line
import Banner from '../../components/Banner/Banner.jsx'; //eslint-disable-line
import Brands from '../../components/Brands/Brands.jsx'; //eslint-disable-line
import Methodologies from '../../components/Methodologies/Methodologies.jsx'; //eslint-disable-line
import Jobs from '../../components/Jobs/JobsComponent.jsx'; //eslint-disable-line
import Tools from '../../components/Tools/Tools.jsx'; //eslint-disable-line
import style from './HomePage.module.css';

export default function HomePage ({ data }) {
  const { slider, brands, services, jobs, sliderLarge } = data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.home_page__container}>
      <Carrousel images={slider} imagesLarge={sliderLarge}/>
      <Banner services={services}/>
      <Methodologies />
      <Jobs jobs={jobs}/>
      <Tools />
      <Brands brands={brands}/>
    </div>
  );
}
