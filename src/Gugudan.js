import React, { useState } from 'react';

export default function Gugudan() {
  const [nums, setNums] = useState([Math.ceil(Math.random() * 9), Math.ceil(Math.random() * 9)]);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const answer = nums[0] * nums[1];
    const myAns = parseInt(value);
    if(answer === myAns) {
      setResult('정답입니다. 답은 '+answer+' 입니다.');
      setScore(score + 10);
    } else {
      setResult('틀렸습니다. 답은 '+answer+' 입니다.');
      setScore(score - 5);
    }
    setNums([Math.ceil(Math.random() * 9), Math.ceil(Math.random() * 9)]);
    setValue('');
  };

  const onChange = (event) => setValue(event.target.value);
 
  return (
    <div>
      SCORE : {score}<br/>
      {nums[0]} * {nums[1]} = ?<br/>
      <form onSubmit={onSubmit}>
        <input type="number" value={value} onChange={onChange}/>
        <button>input</button>
      </form>
      {result}
    </div>
  );
};