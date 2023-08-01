import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Erreur404 from './pages/Erreur404';
import PageLogement from './pages/PageLogement';

const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path='/Home' element = {<Home />}/>
      <Route path='/apropos' element = {<Apropos />}/>
      <Route path='/logement/:id' exact element = {<PageLogement />} />
      <Route path='*' exact element = {<Erreur404 />}/>
    </Routes>

    </BrowserRouter>
  );
};

export default App;

