"use client";
import { useEffect, useRef, useState } from "react";

const MyRefForm = () => {
  //  1. 리렌더링 없이 값 업데이트
  const counterRef = useRef<number>(0);
  // { current : 0 }

  const handleRefCounter = () => {
    counterRef.current += 1;
    console.log("counterRef:", counterRef.current);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  //  2. DOM element에 직접 접근
  //  ref type: HTMLInputElement

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  console.log("컴포넌트 렌더링");

  return (
    <div>
      <div>회원가입 폼입니다</div>
      <div className="flex">
        <button onClick={handleRefCounter}>업데이트</button>
      </div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default MyRefForm;
