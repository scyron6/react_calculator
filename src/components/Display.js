import React from 'react';

const Display = (props) => {
  return (
    <div className='display'>
      {props.smallValue && <h3 className='smallValue'>{props.smallValue}</h3>}
      <h1 className='displayValue'>{props.displayValue}</h1>
    </div>
  );
};

export default Display;
