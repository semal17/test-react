import Header from './Header/Header';
import Footer from './Footer/Footer';
import Category from './Category/Category';
import Home from './Home/Home';
import About from './About/About';
import CategoryDescription from './CategoryDescription/CategoryDescription';
import Error from './Error/Error';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    <>
      <Header />
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/cat" element={<Category />} />
          <Route exact path="/cat/:catName" element={<CategoryDescription />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
      <Footer />
    </>
  );
}

export default App;
