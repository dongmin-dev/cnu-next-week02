/*  실습 2 useState */
"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  // 2-1. 일반 count update (+- 1)
  // +1
  const handleIncrement = () => {
    setCount(count + 1);
  }

  // -1
  const handleDecrement = () => {
    setCount(count - 1);
  }

  // 2-2. 연속적인 setState 호출 예시
  // +1 만 되는 이유 (렌더링 시점의 값으로 업데이트 하고 있기 때문!)
  const duplicateIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // 렌더링 시점의 count 값이 계속 0으로 유지되기 때문에
    // 최종적으로 count는 0 + 1 = 1로 업데이트 됨
  };

  // 2-3. 안전하게 setState를 호출하는 방법
  // 이전 상태(prevState)를 안전하게 참조해서 업데이트. 리액트가 내부적으로 최신 상태를 보장
  const safeIncrement = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  // 2.4. 문제 1: 카운터를 0으로 리셋하는 함수를 useState 이용해 만들어보자.
  const handleReset = () => {
    setCount(0);
  };

  // 2.5. 문제 2: 카운터의 숫자가 10보다 커지지 않게 하는 함수 (handleIncrement 재사용)
  const safeIncrementWithLimit = () => {
    setCount((prevState) => {
      if (prevState < 10) {
        return prevState + 1;
      }
      return prevState; // 10 이상이면 그대로 유지
    });
  };

  // 2.6. 문제 3: 카운터의 숫자가 0보다 작아지지 않게 하는 함수 (handleDecrement 재사용)
  const safeDecrementWithLimit = () => {
    setCount((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      }
      return prevState; // 0 이하이면 그대로 유지
    });
  };

  // 2-7. counter 함수를 전역으로 유지 (useContext) Homework .. ? 아마도

  console.log("페이지 렌더링");

  return (
    <div>
      <div>카운터 입니다</div>
      <div className="flex">
        <button onClick={safeDecrementWithLimit}>-</button>
        <p>{count}</p>
        <button onClick={safeIncrementWithLimit}>+</button>
      </div>
      <button onClick={handleReset}>리셋</button>
    </div>
  );
};

export default Counter;
