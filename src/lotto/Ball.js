import React from 'react';

const Ball = ({number}) => {
  let background;

  if(number <= 10) background = 'yellow';
  else if(number <= 20) background = 'cyan';
  else if(number <= 30) background = 'red';
  else if(number <= 40) background = 'gray';
  else  background = 'green';

  return (
    <div style={{
      background, width:"50px", height:"50px", 
      borderRadius:"50%", float:'left',
      marginRight:"10px"}}>
        <div style={{
          width:"100%", paddingTop:"13px", 
          textAlign:"center"}}>
          {number}
        </div>
    </div>
  );
};

export default Ball;