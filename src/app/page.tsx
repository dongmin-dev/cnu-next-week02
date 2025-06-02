"use client";
import Counter from "./component/Counter";
import MyForm from "./component/MyForm";
import Timer from "./component/Timer";
import MyRefForm from "./component/MyRefForm";

import Header from "./component/layout/Header";
import { useState } from "react";
import Footer from "./component/layout/Footer";
import ContextPage from "./component/ContextComponent";
import ExpensiveComponent from "./component/ExpensiveComponent";
import CallbackCounter from "./component/CallbackCounter";
import { ThemeContext } from "./context/ThemeContext";
// prettier, color hightLight, hightlight Matching 설치 권장
export default function Home() {
  // ThemeContext 용
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div>
      {/* 1. Header 만들기 실습 (props) */}
      {/* <Header title={"나의 홈페이지"} /> */}
      {/* 2. Counter 만들기 실습 (useState) */}
      {/* <Counter /> */}
      {/* 3. MyForm 실습 (useEffect)  */}
      {/* <MyForm /> */}
      {/* 4. useRef 실습*/}
      {/* <MyRefForm /> */}
      {/* <Timer /> */}
      {/* 4. useContext 실습  */}
      {/* <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <ContextPage />
      </ThemeContext.Provider> */}
      {/* <ExpensiveComponent /> */}
      <CallbackCounter />
    </div>
  );
}
