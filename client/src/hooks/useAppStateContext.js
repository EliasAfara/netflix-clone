import { useContext } from 'react';
import { AppStateContext } from '../context/appStateProvider';

const useAppStateContext = () => {
  return useContext(AppStateContext);
};

export default useAppStateContext;
