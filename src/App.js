import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Erreur404 from './pages/Erreur404';
import PageLogement from './pages/PageLogement';

const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path='/home' element = {<Home />}/>
      <Route path='/apropos' element = {<Apropos />}/>
      <Route path='/apropos/*' element = {<Apropos />}/>
      <Route path='/logement/:id' element = {<PageLogement />} />
      <Route path='/logement/:id/*' element = {<Home />} />
      <Route path='*' element = {<Erreur404 />}/>
    </Routes>

    </BrowserRouter>
  );
};

export default App;

