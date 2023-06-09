import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Plantacao from './pages/Plantacao';
import Ia from './pages/IA';
import Conta from './pages/Conta';
import Contato from './pages/Contato';
import Info from './pages/Info';
import Cadastro from './pages/Cadastro';
import Senha from './pages/Senha';

function App() {
  return (
    <>    
    <Router>
    <Banner/>
    <Routes>  
      <Route path='/' element={<Home/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
      <Route path='/Plantacao' element={<Plantacao/>}/>
      <Route path='/IA' element={<Ia/>}/>
      <Route path='/Conta' element={<Conta/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/Info' element={<Info/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      <Route path='/Senha' element={<Senha/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
