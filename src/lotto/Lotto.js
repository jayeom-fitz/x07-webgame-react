import React, { useEffect, useState, useRef } from 'react';

const Lotto = () => {
  const [winNo, setWinNo] = useState([]);
  const [bonus, setBonus] = useState(null);

  return (
    <>
      <div>
        <div>당첨 숫자</div>
        <div id="result">

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







