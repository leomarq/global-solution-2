import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Planta from './pages/Planta';
import Ia from './pages/IA';
import Conta from './pages/Conta';
import Contato from './pages/Contato';
import Info from './pages/Info';

function App() {
  return (
    <>    
    <Router>
    <Banner/>
    <Routes>  
      <Route path='/' element={<Home/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
      <Route path='/Planta' element={<Planta/>}/>
      <Route path='/IA' element={<Ia/>}/>
      <Route path='/Conta' element={<Conta/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/Info' element={<Info/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
