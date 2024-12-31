import './App.css'
import ClassCompEg from './Components/ClassComponents/ClassCompEg'
import Home from './Components/FunctionalComponents/Home';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact';
import About from './Components/FunctionalComponents/About';
import NavBar from './Components/FunctionalComponents/NavBar';
import Footer from './Components/FunctionalComponents/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About college="KEC" clg1="Naturopathy" clg2="Polytecnic" />}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <ClassCompEg />
      <Footer/>
    </div>
  );
}

export default App;