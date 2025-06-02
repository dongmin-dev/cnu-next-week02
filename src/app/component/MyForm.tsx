/*  실습 3 useEffect */
"use client";
import { useEffect, useState } from "react";

const MyForm = () => {
  // count, name에 대한 useState 함수 작성
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  //  3-0. useEffect가 실행되는 시점
  useEffect(() => {
    console.log("3-0. 컴포넌트 랜더링이 끝난 후 실행됩니다");
  });

  // 3-1. 페이지가 처음 렌더링 될 때만 실행되는 useEffect
  useEffect(() => {
    console.log("3-1. 컴포넌트가 최초로 렌더링 될 때만 실행됩니다");
  }, []);

  // 3-2. count가 update 될 때만 useEffect를 실행
  useEffect(() => {
    console.log("3-2. count가 update 될 때만 실행됩니다");
  }, [count]);

  //  3-3. name이 update될 때 useEffect 실행 (useState + useEffect)
  useEffect(() => {
    console.log("3-3. name이 update 될 때만 실행됩니다");
  }, [name]);

  // 이름 input handler, event type: React.ChangeEvent<HTMLInputElement>
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  // count update

  const handleCountUpdate = () => {
    // setCount(count + 1);
    setCount((prevState) => prevState + 1);
  };

  console.log("컴포넌트 렌더링 도중 실행됨 (useEffect 보다 먼저 실행됨)");

  return (
    // <div>
    //   <div>회원가입 폼입니다</div>
    //   <div className="flex">
    //     <div>count: {count}</div>
    //     <button onClick={handleCountUpdate}>업데이트</button>
    //   </div>
    //   <div>내 이름은 {name} 입니다</div>
    //   <input type="text" value={name} onChange={handleInputChange} />
    // </div>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">MyForm</h2>
      <div className="flex">
        <div>count: {count}</div>
        <button onClick={handleCountUpdate}>업데이트</button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">카운트</label>
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">{count}</span>
          <button
            onClick={handleCountUpdate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            업데이트
          </button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">이름</label>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="이름을 입력하세요"
        />
        <p className="text-sm text-gray-600 mt-1">
          내 이름은 <strong>{name}</strong> 입니다
        </p>
      </div>
    </div>
  );
};

export default MyForm;
