import React from 'react';
import Key from './Key';

const Keypad = ({
  numbers,
  operators,
  updateDisplay,
  setOperator,
  callOperator,
}) => {
  return (
    <div className='keypad'>
      <div className='inputs'>
        <div className='numbers'>
          {numbers.map((number) => (
            <Key
              type='number'
              key={number}
              value={number}
              handleClick={updateDisplay}
            />
          ))}
        </div>
        <div className='operators'>
          {operators.map((operator) => (
            <Key
              type='operator'
              key={operator}
              value={operator}
              handleClick={setOperator}
            />
          ))}
        </div>
      </div>
      <button className='equals text' onClick={() => callOperator()}>
        =
      </button>
    </div>
  );
};

export default Keypad;
