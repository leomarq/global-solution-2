import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Planta from './pages/Planta';
import Ia from './pages/IA';
import Conta from './pages/Conta';

function App() {
  return (
    <>    
    <Banner/>
    <Home/>
    {/* <Routes>  
      <Route path='/' element={<Home/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
      <Route path='/Planta' element={<Planta/>}/>
      <Route path='/IA' element={<Ia/>}/>
      <Route path='/Conta' element={<Conta/>}/>
    </Routes>    */}
    </>
  );
}

export default App;
