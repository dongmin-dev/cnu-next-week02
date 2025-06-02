"use client";
import { useEffect, useState } from "react";

const Timer = () => {
  const [show, setShow] = useState(true);

  const TimerWithCleanup = () => {};

  // 다시 setShow(true)로 보이면, TimerWithoutCleanup은 또 새로운 setInterval을 추가로 생성함.
  const TimerWithoutCleanup = () => {};

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? "타이머 숨기기" : "타이머 보이기"}
      </button>

      {show && (
        <div>
          {/* <TimerWithCleanup />
          <TimerWithoutCleanup /> */}
        </div>
      )}
    </div>
  );
};

export default Timer;
