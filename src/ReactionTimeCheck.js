import React, { useState } from 'react';

export default function ReactionTimeCheck() {
  const [ready, setReady] = useState(0);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [times, setTimes] = useState([]);

  function getMention() {
    return ready === 0 ? 
    'Game Start' : (ready === 1 ? 
      'Ready' : '<<< Click >>>');
  }

  function getColor() {
    return ready === 0 ? 'cyan' : (ready === 1 ? 'yellow' : 'green');
  }
  
  const onClick = (e) => {
    setReady((ready + 1) % 3);
  };

  return (
    <>
      <div style={{
        width:'500px', height:'500px', background:getColor()
      }} onClick={onClick}>
        <div style={{paddingTop:'240px', width:'500px', textAlign:'center'}}>
          {getMention()}
        </div>
      </div>
    </>
  );
}