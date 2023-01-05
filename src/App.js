import './App.css';
import React from 'react';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Galeria from './pages/galeria/galeria';
import Produtos from './pages/Produtos/produtos';
import Detalhes from './pages/Produtos/detalhes';
import Contato from './pages/contato/contato';
function App() {

  return (    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/produtos' element={<Produtos />}/>
        <Route path='/produtos/detalhes/:id' element={<Detalhes />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/galeria' element={<Galeria />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
