import React, { useContext } from 'react';
import { appContext } from './App';

const ComA = () => {
  const { name, profession, count, changeName, incrCount } =
    useContext(appContext);
  //   console.log(data);
  return (
    <>
      <h2>COM A</h2>
      <h2>{`my name is ${name} and my I am ${profession}`}</h2>

      <button
        onClick={() => {
          changeName();
        }}
      >
        change name
      </button>
      <hr />
      <h2>{count}</h2>
      <button
        onClick={() => {
          incrCount();
        }}
      >
        Increase Count
      </button>
    </>
  );
};

export default ComA;
