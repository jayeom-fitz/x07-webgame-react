import React, { useEffect, useState, useRef } from 'react';

import Ball from "./Ball";

const Lotto = () => {
  const [winNo, setWinNo] = useState([1, 10, 11, 21, 33, 45]);
  const [bonus, setBonus] = useState(null);

  return (
    <>
      <div>
        <div>당첨 숫자</div>
        <div id="result">
          {winNo.map(n => <Ball key={n} number={n}/>)}
        </div>
      </div>
      <div>
        <div>보너스</div>
      </div>
      <div>
        <button>다시</button>
      </div>
    </>
  );
};

export default Lotto;







