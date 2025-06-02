/*  실습 useCallback */
import React, { useState, useCallback, useRef, useEffect } from "react";

function CallbackCounter() {
  const [count, setCount] = useState(0);

  //  ref 선언

  // useCallback으로 함수 메모이제이션
  const handleIncrement = () => {};

  // useCallback으로 함수 메모이제이션
  const handleCallbackDecrement = () => {};

  const handleDecrement = () => {};

  useEffect(() => {
    // ref 사용
  }, []);

  useEffect(() => {
    //  ref 비교
  }, [count]);

  return (
    <div>
      <h2>카운트: {count}</h2>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleCallbackDecrement}>callback감소</button>
      <button onClick={handleDecrement}>감소</button>
    </div>
  );
}

export default CallbackCounter;
