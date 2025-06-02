import { ThemeContext } from '@/app/context/ThemeContext';
import { useContext } from 'react';

/* 실습 4 useContext */
const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const handleToggle = () => {
    setIsDark(!isDark);
    console.log('Footer toggle', isDark);
  };
  
  return (
    <div
    className="footer"
    style={{
      backgroundColor: isDark ? '#333' : '#f0f0f0',
      color: isDark ? '#fff' : '#000',
    }}
    >
      <p>푸터입니다</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        onClick={handleToggle}
      >
        toggle
      </button>
    </div>
  );
};
export default Footer;
