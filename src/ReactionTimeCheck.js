import React, { useState } from 'react';

export default function ReactionTimeCheck() {
  const [ready, setReady] = useState(0);
  const [time, setTime] = useState(0);
  const [times, setTimes] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  function getMention() {
    return ready === 0 ? 'Game Start' : (ready === 1 ? 'Ready' : '<<< Click >>>');
  }

  function getColor() {
    return ready === 0 ? 'cyan' : (ready === 1 ? 'yellow' : 'green');
  }
  
  function getAverage() {
    if(times.length === 0) return 0;
    let sum = 0;
    for (let i=0; i<times.length; i++) 
      sum += times[i];     
    return sum / times.length + ' ms';
  }

  function setTimeoutID() {
    setTimeoutId(setTimeout(function() {
      setTime(Date.now()); setReady(2);
    }, Math.random() * 7000 + 1000));
  }

  function clearTimeoutID() {
    clearTimeout(timeoutId);
  }

  const onReset = (e) => {
    setReady(0); setTime(0); setTimes([]);
  };

  const onClick = (e) => {
    if(ready === 0) {
      setTimeoutID(); setReady(1);
    } else if(ready === 1) {
      clearTimeoutID();
      setReady(0); return;
    } else {
      const diff = Date.now() - time;
      let arr = times; arr.push(diff);
      setTimes(arr);
      setReady(0);
    }
  };

  return (
    <>
      <div>
        <button onClick={onReset}>RESET</button>
        평균 : {getAverage()}
      </div>
      <div>
        <div style={{
          width:'500px', height:'500px', background:getColor(),
          float:'left'
        }} onClick={onClick}>
          <div style={{paddingTop:'240px', width:'500px', textAlign:'center'}}>
            {getMention()}
          </div>
        </div>
        <div style={{float:'left'}}>
          <ul>
            {times.map(rt => (<li key={'li'+rt}>{rt} ms</li>))}
          </ul>
        </div>
      </div>
    </>
  );
}