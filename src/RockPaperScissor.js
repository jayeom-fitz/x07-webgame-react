import React, { useEffect, useState, useRef } from 'react';

const rspCoords = {
  rock : '-0px',
  scissor : '-142px',
  paper : '-284px',
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function(v) {
      return v[0] === imgCoord;
  })[1];
};

const rscValue = (rspCoord) => {
  return parseInt(rspCoord[1]);
};

const cycle = 200;
const cycleWait = 2000;

export default function RockPaperScissor() {
  const [imgCoord, setImgCoord] = useState(rspCoords.rock);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const interval = useRef();

  const onClick = (choice) => () => {
    clearInterval(interval.current);

    const my = rscValue(computerChoice(choice));
    const com = rscValue(imgCoord);
    const diff = my - com;

    if(diff === 0) {
      setResult('DRAW');
    } else if((diff + 1) % 3 === 0) {
      setResult('You WIN!');
      setScore(score + 1);
    } else {
      setResult('You LOSE...');
      setScore(score - 1);
    }

    setTimeout(() => {
      interval.current = setInterval(changeHand, cycle)
    }, cycleWait);
  };

  const changeHand = () => {
    if (imgCoord === rspCoords.rock) 
      setImgCoord(rspCoords.scissor);
    else if (imgCoord === rspCoords.paper) 
      setImgCoord(rspCoords.rock);
    else
      setImgCoord(rspCoords.paper);
  };

  useEffect(() => {
    interval.current = setInterval(changeHand, cycle);
    return(() => {
      clearInterval(interval.current);
    });
  }, [imgCoord]);

  return (
    <>
      <div id='computer' style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`, width:'125px', height:'230px'}} />
      <div>
        <button id='scissor' className='btn' onClick={onClick('scissor')}>가위</button>
        <button id='rock'    className='btn' onClick={onClick('rock')}>바위</button>
        <button id='paper'   className='btn' onClick={onClick('paper')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score} 점</div>
    </>
  );
}







