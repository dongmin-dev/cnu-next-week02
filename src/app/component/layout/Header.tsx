/*  실습 1 */
/* 실습 4 useContext */

interface HeaderProps {
  title: string;
}

// 1. props 실습
// 이 형태로도 쓸 수 있다 const Header = (props) => {
const Header = ({ title }: HeaderProps) => {
  return <div className="header">{title}</div>;
};

export default Header;
