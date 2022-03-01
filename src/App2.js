import React, { createContext, useReducer } from 'react';
import ComA from './ComA';

const istate = {
  name: 'anshuman',
  age: 27,
  count: 0,
};
export const AppContext = createContext();

const reducer = (state, action) => {
  if (action.type === 'CHANGE_NAME') {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === 'INCREASE') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  return state;
};

const App = () => {
  const [person, dispatch] = useReducer(reducer, istate);

  const ChangeName = () => {
    dispatch({ type: 'CHANGE_NAME', payload: 'avinash' });
  };
  const IncreaseCount = () => {
    setTimeout(() => {
      dispatch({ type: 'INCREASE' });
    }, 3000);
  };
  return (
    <>
      <AppContext.Provider value={{ ...person, ChangeName, IncreaseCount }}>
        <ComA />
      </AppContext.Provider>
    </>
  );
};

export default App;
