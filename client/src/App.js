import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Signup from './pages/Signup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Netflix />} />
        <Route exact path='/player' element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
