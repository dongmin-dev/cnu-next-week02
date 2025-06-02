/* 실습 4 useContext */

import { ThemeContext } from '@/app/context/ThemeContext';
import { useContext } from 'react';

const Content = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <div className="content"
      style={{
        backgroundColor: isDark ? '#444' : '#fff',
        color: isDark ? '#fff' : '#000',
      }}
    >
      <p>콘텐츠 입니다</p>
    </div>
  );
};

export default Content;
