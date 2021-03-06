import React, { createContext, useReducer } from 'react';
import ComA from './ComA';

export const appContext = createContext();

const iState = {
  name: 'anshu',
  age: 27,
  profession: 'software engineer',
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === 'CHANGE_NAME') {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === 'INCREASE_COUNT') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  return state;
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, iState);

  const changeName = () => {
    dispatch({ type: 'CHANGE_NAME', payload: 'anshuman' });
  };

  const incrCount = () => {
    setTimeout(() => {
      dispatch({ type: 'INCREASE_COUNT' });
    }, 3000);
  };

  return (
    <>
      <appContext.Provider value={{ ...state, changeName, incrCount }}>
        <ComA />
      </appContext.Provider>
    </>
  );
};

export default App;
