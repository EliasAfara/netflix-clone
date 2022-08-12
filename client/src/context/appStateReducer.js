const AppStateReducer = (state, action) => {
  switch (action.type) {
    case 'Login': {
      // Add the user to local storage
      localStorage.setItem(
        'SmartElectionsProfile',
        JSON.stringify({ ...action.payload, isAuthenticated: true })
      );

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case 'Register': {
      // Add the user to local storage
      localStorage.setItem(
        'SmartElectionsProfile',
        JSON.stringify({ ...action.payload, isAuthenticated: true })
      );

      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    }

    case 'Logout': {
      window.localStorage.removeItem('SmartElectionsProfile');
      return {
        isAuthenticated: false,
        user: null,
      };
    }

    default:
      return state;
  }
};

export default AppStateReducer;
