/*  실습 1 */
/* 실습 4 useContext */

import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";

interface HeaderProps {
  title: string;
}

// 1. props 실습
// 이 형태로도 쓸 수 있다 const Header = (props) => {
const Header = ({ title }: HeaderProps) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return <div className="header"
    style={{
      backgroundColor: isDark ? "#333" : "#eee",
      color: isDark ? "#fff" : "#000",
      padding: "10px",
      textAlign: "center",
    }}
  >{title}</div>;
};

export default Header;
