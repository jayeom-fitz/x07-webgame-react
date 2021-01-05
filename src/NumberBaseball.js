import React, { useState } from 'react';

export default function NumberBaseball() {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [result, setResult] = useState([]);
  const [notice, setNotice] = useState('');

  function checkNumber(arr) {
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
    }while(checkNumber(ran));
    console.log(ran);
    setNums(ran);    setCount(0);    setResult([]);    
    setValue('');    setNotice('');
  };

  function numberToArray(num) {
    let array = [0, 0, 0, 0];
    let div = 1000;
    for(let i=0; i<4; i++, div/=10) {
      array[i] = Math.floor(num/div);
      num -= Math.floor(num/div) * div;
    }
    return array;
  }

  function checkAnswer(arr) {
    let s = 0, b = 0;
    for (let i=0; i<4; i++) {
      for (let j=0; j<4; j++) {
        if(nums[i] === arr[j]) {
          if(i === j) s++;
          else b++;
          break;
        }
      }
    }
    return s + 'S' + b + 'B';
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const n = parseInt(value);
    const arr = numberToArray(n);
    if((n <= 100 || n >= 10000) || checkNumber(arr)) {
      setNotice('잘못된 입력입니다.'); return;
    }
    
    if(count >= 10) {
      setNotice('횟수 초과입니다. Please RESET !'); return;
    }

    setCount(count + 1);
    const res = checkAnswer(arr);
    if(res[0] === '4') {
      setNotice('정답입니다.'); return;
    } 
    
    let array = result; array.push(n + ' - ' + res);
    setResult(array);
    setNotice('');  setValue('');
  };

  const onChange = (event) => setValue(event.target.value);
 
  return (
    <>
      <div><button onClick={init}>Reset</button></div>
      <div>COUNT : {count}</div>
      <ul>
        {result.map(res => (<li key={'li'+res}>{res}</li>))}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="number" value={value} onChange={onChange}/>
        <input type="submit" value="input"/>
      </form>
      {notice}
    </>
  );
}