import './App.css'
import ClassCompEg from './Components/ClassComponents/ClassCompEg'
import Home from './Components/FunctionalComponents/Home';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact';
import About from './Components/FunctionalComponents/About';
import NavBar from './Components/FunctionalComponents/NavBar';
import Footer from './Components/FunctionalComponents/Footer';  
import UseEffect from './Components/FunctionalComponents/UseEffect';
import Useeffect from './Components/FunctionalComponents/UseEffectAPI'
import UseRef from './Components/FunctionalComponents/UseRef'
import ExamResults from './Components/FunctionalComponents/UseContext';
import UseMemo from './Components/FunctionalComponents/UseMemo';
import Login from './Components/FunctionalComponents/Login';
import Signup from './Components/FunctionalComponents/Signup';
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
          <Route path="/UseEffect" element={<UseEffect/>}/>
          <Route path="/UseEffectAPI" element={<Useeffect/>}/>
          <Route path="/UseRef" element={<UseRef/>}/>
          <Route path="/ExamResults" element={<ExamResults/>}/>
          <Route path="/UseMemo" element={<UseMemo/>}/>
          <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <ClassCompEg />
      <Footer/>
    </div>
  );
}

export default App;
