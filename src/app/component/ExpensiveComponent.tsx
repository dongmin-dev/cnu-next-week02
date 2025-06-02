/* 실습 5 */
import React, { useState, useMemo } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  // 오래 걸리는 계산 함수
  const expensiveCalculation = (num: number) => {
    console.log("계산 중...");
    for (let i = 0; i < 100000000; i++) {}
      return num * 2;
  };

  // const calculatedNumber = expensiveCalculation(count);
  // useMemo로 계산 결과를 메모이제이션
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  // state가 바뀐다 -> 컴포넌트가 재렌더링된다
  // 함수 안에 정의된 변수들이 모두 초기화된다... 그래서 expensiveCalculation 재호출되어서 시간 오래 걸림
  return (
    <div>
      {/* <h2>계산된 값: {calculatedNumber}</h2> */}
      <h2>계산된 값: {memoizedValue}</h2>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      <h2>다른 상태: {otherState + ""}</h2>
      <button onClick={() => setOtherState(!otherState)}>다른 상태 변경</button>
    </div>
  );
};

export default ExpensiveComponent;
