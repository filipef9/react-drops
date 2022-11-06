import React from 'react';
import './App.css';

export const App = () => {
  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('target (button)', event.target);
    console.log('target (button)', event.currentTarget);
  };

  const handleClickDiv = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log('target (div)', event.target)
    console.log('currentTarget (div)', event.currentTarget)
  }

  return (
    <div>      
      {/* 
        Write onClick event inline and hover over the 'event' parameter with your mouse
        to get its type.

        <button onClick={event => console.log(event)}>Click</button>
        <div onClick={event => console.log(event)}>Click</button>
      */}

      <button onClick={handleClickButton}>Click</button>
      <div onClick={handleClickDiv}>Click</div>
    </div>
  );
};
