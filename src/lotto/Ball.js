import React from 'react';

const Ball = ({number}) => {
  let background;

  if(number <= 10) background = 'yellow';
  else if(number <= 20) background = 'cyan';
  else if(number <= 30) background = 'red';
  else if(number <= 40) background = 'gray';
  else  background = 'green';

  return (
    <div className={number} style={{background}}>{number}</div>
  );
};

export default Ball;