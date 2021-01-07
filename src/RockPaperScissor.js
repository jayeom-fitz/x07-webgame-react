import React, { useEffect, useState } from 'react';

export default function RockPaperScissor() {
  const [imgCoord, setImgCoord] = useState(0);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  function onClick(value) {
    console.log(value);
  };

  useEffect(() => {
    setInterval(() => {
      console.log('setInterval');
    }, 1000);
  });

  return (
    <>
      <div id='computer' style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}} />
      <div>
        <button id='scissor' className='btn' onClick={() => onClick(0)}>가위</button>
        <button id='rock'    className='btn' onClick={() => onClick(1)}>바위</button>
        <button id='paper'   className='btn' onClick={() => onClick(2)}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score} 점</div>
    </>
  );
}







