import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import Contact from './page/Contact';
import About from './page/About';

function App() {
  return (
    <div>
      <nav style={{margin: "20px"}}>
        <Link to="/"> Home </Link> | <Link to="/Contact"> Contact </Link> | <Link to="/About"> About </Link>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
