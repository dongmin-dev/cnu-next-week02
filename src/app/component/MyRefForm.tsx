"use client";
import { useEffect, useRef, useState } from "react";

const MyRefForm = () => {
  //  1. 리렌더링 없이 값 업데이트

  //  2. DOM element에 직접 접근
  //  ref type: HTMLInputElement

  return (
    <div>
      <div>회원가입 폼입니다</div>
      {/* <div className="flex">
        <button onClick={handleRefCounter}>업데이트</button>
      </div>
      <input ref={inputRef} type="text" /> */}
    </div>
  );
};

export default MyRefForm;
