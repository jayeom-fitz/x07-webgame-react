import React, { useState } from 'react';

export default function NumberBaseball() {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);
  const [answer, setAnswer] = useState('');

  function checkRandom(arr) {
    for (let i=0; i<arr.length; i++) {
      for (let j=i+1; j<arr.length; j++) {
        if(arr[i] === arr[j])
          return true;        
      }
    }
    return false;
  }

  const init = (event) => {
    let ran = [];
    do{
      ran = [Math.ceil(Math.random() * 9), Math.ceil(Math.random() * 9),
             Math.ceil(Math.random() * 9) ,Math.ceil(Math.random() * 9)]
    }while(checkRandom(ran));
    setNums(ran);    setCount(0);    setResult([]);    
    setValue('');    setAnswer('')
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onChange = (event) => setValue(event.target.value);
 
  return (
    <>
      <div><button onClick={init}>Reset</button></div>
      <form onSubmit={onSubmit}>
        <input type="number" value={value} onChange={onChange} maxLength={4}/>
        <button>input</button>
      </form>
    </>
  );
}