import React, { useEffect, useState, useRef, useMemo } from 'react';

import Ball from "./Ball";

function getWinNo() {
  console.log('getWinNo()');
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];

  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }

  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

  return [...winNumbers, bonusNumber];
}

const cycle = 500;

const Lotto = () => {
  const lottoNo = useMemo(() => getWinNo(), []);
  const [winNo, setWinNo] = useState(lottoNo);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    console.log('useEffect()');

    for (let i = 0; i<winNo.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNo[i]]);
      }, (i + 1) * cycle);
    }

    timeouts.current[6] = setTimeout(() => {
      setBonus(winNo[6]);
      setRedo(true);
    }, cycle * winNo.length);

    return () => {
      timeouts.current.forEach((v) => {
          clearTimeout(v);
      });
    };
  }, [timeouts.current]);

  const onClickRedo = () => {
    console.log('onClickRedo');
    setWinNo(getWinNo());    setWinBalls([]);
    setBonus(null);    setRedo(false);
    timeouts.current = [];
  };

  return (
    <>
      <div>
        <div>당첨 숫자</div>
        <div id="result">
          {winBalls.map(n => <Ball key={n} number={n}/>)}
        </div>
      </div>
      <div style={{paddingTop:"60px"}}>
        <div>보너스</div>
        {bonus && <Ball key={bonus} number={bonus}/>}
        {redo && <button onClick={onClickRedo}>다시</button>}
      </div>
    </>
  );
};

export default Lotto;







