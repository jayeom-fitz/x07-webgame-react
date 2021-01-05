import React, { useState } from 'react';

export default function WordRelay() {
  const [words, setWords] = useState(['REACT']);
  const [score, setScore] = useState(0);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const len = words.length - 1;
    const len2 = words[len].length - 1;
    if(words[len][len2] !== value[0].toUpperCase()) {
      setScore(score - value.length);
      setResult('올바르지 않은 단어입니다.');
    } else if(words.filter(i => i === value.toUpperCase()).length !== 0) {
      setScore(score - value.length);
      setResult('중복된 단어입니다.');
    } else {
      const array = words; 
      array.push(value.toUpperCase());
      setWords(array);
      setScore(score + value.length);
      setResult('');
    }
    setValue('');
  };

  const onChange = (event) => setValue(event.target.value);
 
  return (
    <>
      <div> SCORE : {score} </div>
      <div>
        {words.map((w) => (<div key={w}>{w}</div>))}
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange}/>
        <input type="submit" value="input"/>
      </form>
      {result}
    </>
  );
}