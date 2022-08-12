import { createContext, useReducer } from 'react';
import AppStateReducer from './appStateReducer';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
};

export const AppStateContext = createContext(INITIAL_STATE);

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppStateReducer, INITIAL_STATE);

  return (
    <AppStateContext.Provider value={{ appState: state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
