import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { globalState } from './data';

const Context = createContext();

LanguageContext.propTypes = {
  children: PropTypes.node
}

function LanguageContext( { children } ) {
  const [state, dispatch] = useReducer(reducer, globalState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      { children }
    </Context.Provider>
  );
}

function useLanguageContext() {
  return useContext(Context);
}

export { LanguageContext, useLanguageContext };
