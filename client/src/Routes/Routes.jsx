import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAppStateContext from '../hooks/useAppStateContext';

export const PrivateRoute = () => {
  const { appState } = useAppStateContext();

  return appState?.isAuthenticated && appState?.user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  );
};

export const PublicRoute = () => {
  const { appState } = useAppStateContext();
  // If not authorized, return an outlet that will render child elements
  // If not, return element that will navigate to home page
  return !appState?.isAuthenticated && !appState?.user ? (
    <Outlet />
  ) : (
    <Navigate to='/' />
  );
};
