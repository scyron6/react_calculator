import React from 'react';

const Key = ({ handleClick, value, type }) => {
  return (
    <button className={type + ' text'} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Key;
