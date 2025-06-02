/* 실습 4 useContext */
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

// 만약 props를 사용했다면, 여기서 prop를 사용하지 않는데도 props를 강제로 전달해야했다
const ContextComponent = () => {
  return (
    <div className="page-container">
      <Header title={"my page"} />
      <Content />
      <Footer />
    </div>
  );
};

export default ContextComponent;
