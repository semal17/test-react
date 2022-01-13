import Header from './Header/Header';
import Footer from './Footer/Footer';
import Category from './Category/Category';
import Home from './Home/Home';
import About from './About/About';
import CategoryDescription from './CategoryDescription/CategoryDescription';
import Error from './Error/Error';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const headList = {
  nav : [
    {"link" : "/", "text" : "Главная"},
    {"link" : "/about", "text" : "О сайте"},
    {"link" : "/cat", "text" : "Категории"},
  ]
};

const catList = {
  nav : [
    {"link" : "/cat/notebook", "text" : "Ноутбуки"},
    {"link" : "/cat/monitor", "text" : "Мониторы"},
    {"link" : "/cat/cellphone", "text" : "Мобильные телефоны"},
  ]
};


function App() {
  return (
    <>

      <Router>
        <Header data={headList} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/cat" element={<Category data={catList} />} /> 
          <Route exact path="/cat/:catName" element={<CategoryDescription />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </Router>

    </>
  );
}

export default App;
