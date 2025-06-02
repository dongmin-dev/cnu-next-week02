/*  실습 useCallback */
import React, { useState, useCallback, useRef, useEffect } from "react";

function CallbackCounter() {
  const [count, setCount] = useState(0);

  //  ref 선언
  const decrementRef = useRef(() => {});
  const callbackRef = useRef(() => {});

  // useCallback으로 함수 메모이제이션
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // useCallback으로 함수 메모이제이션
  const handleCallbackDecrement = useCallback(() => {
    return setCount(count - 1);
  }, []);

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    // ref 사용
    decrementRef.current = handleDecrement;
    callbackRef.current = handleCallbackDecrement;
  }, []);

  useEffect(() => {
    //  ref 비교
    console.log("handleCallbackDecremnt 동일한가?",
      callbackRef.current === handleCallbackDecrement,
    );
    console.log("handleDecrement 동일한가?", 
      decrementRef.current === handleDecrement,
    );
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">I hate bad lectures: {count}</h2>
      <div className="flex space-x-4">
      <button
        onClick={handleIncrement}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 text-lg font-semibold transition duration-300"
      >
        증가
      </button>
      <button
        onClick={handleCallbackDecrement}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg font-semibold transition duration-300"
      >
        callback감소
      </button>
      <button
        onClick={handleDecrement}
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 text-lg font-semibold transition duration-300"
      >
        감소
      </button>
      </div>
    </div>
  );
}

export default CallbackCounter;
