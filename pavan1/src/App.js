// src/App.js
import './App.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Components/Dashboard'
import Mobiles from './Pages/Mobiles';
import Laptops from './Pages/Laptops';
import TV from './Pages/TV';
import Contact from './Pages/Contact';
import Signup from './Pages/Signup';
import Mobileview from './viewsingle/Mobileview';
import Laptopview from './viewsingle/Laptopview';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/tvs' element={<TV />} />
           <Route path="/mobiles/id:"  element = {<Mobileview />} />
           <Route path='/laptops/id:' element ={ <Laptopview/>} />
      </Routes>
    </Router>
  );
}

export default App;
