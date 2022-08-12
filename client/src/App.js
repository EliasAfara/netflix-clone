import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Signup from './pages/Signup';

// State Context
import useAppStateContext from './hooks/useAppStateContext';

// Routes
import { PrivateRoute, PublicRoute } from './Routes/Routes';

const App = () => {
  const { appState, dispatch } = useAppStateContext();

  console.log(appState);

  if (JSON.parse(localStorage.getItem('NetflixCloneProfile')) === null) {
    window.localStorage.setItem(
      'NetflixCloneProfile',
      JSON.stringify({ isAuthenticated: false })
    );
  }

  useEffect(() => {
    const userProfile = JSON.parse(
      window.localStorage.getItem('NetflixCloneProfile')
    );

    if (userProfile !== null) {
      if (userProfile.isAuthenticated) {
        delete userProfile.isAuthenticated;
        dispatch({ type: 'Login', payload: userProfile });
      }
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route exact path='login' element={<Login />} />
        </Route>

        <Route element={<PublicRoute />}>
          <Route exact path='signup' element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route exact path='/' element={<Netflix />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route exact path='/player' element={<Player />} />
        </Route>

        {/* <Route exact path='/login' element={<Login />} /> */}
        {/* <Route exact path='/signup' element={<Signup />} /> */}

        {/* <Route exact path='/' element={<Netflix />} /> */}
        {/* <Route exact path='/player' element={<Player />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
