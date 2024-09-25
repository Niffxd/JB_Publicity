import { BrowserRouter, Routes, Route } from 'react-router-dom'; //eslint-disable-line
import Navbar from './components/Navbar/Navbar.jsx'; //eslint-disable-line
import Footer from './components/Footer/Footer.jsx'; //eslint-disable-line
import NotFoundPage from './pages/NotFound/NotFound.jsx'; //eslint-disable-line
import HomePage from './pages/Home/Home.jsx'; //eslint-disable-line
import JobPageDetail from './pages/JobDetail/JobDetail.jsx'; //eslint-disable-line
import AboutPage from './pages/About/About.jsx'; //eslint-disable-line
// import logo from './assets/images/logo/logo.png';
import logo from './assets/images/logo/logo2.png';
// import loader from './assets/loaders/oval.svg';
import db from './assets/json/db.json';

function App () {
  return (
    <BrowserRouter>
      <Navbar logo={logo} data={db}/>
      <Routes>
        <Route exac path='/' element={<HomePage logo={logo} data={db}/>}/>
        <Route exac path='/quienes-somos' element={<AboutPage data={db}/>}/>
        <Route exac path='/:job' element={<JobPageDetail jobs={db.jobs}/>}/>
        <Route path='*' element={<NotFoundPage categories={db.categories}/>}/>
        <Route exac path='/no-encontrado' element={<NotFoundPage categories={db.categories}/>}/>
      </Routes>
      <Footer logo={logo} data={db}/>
    </BrowserRouter>
  );
}

export default App;
