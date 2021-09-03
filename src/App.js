import 'bootstrap/dist/css/bootstrap.min.css';
import './tablet.scss';
import Header from './component/header/Header';
import Slide from './component/slide/Slide';
import SectionBanner from './component/sectionBanner/SectionBanner';
import Banner2 from './component/sectionBanner2/Bannner2';
import VideoItem from './component/video/VideoItem';
import Banner3 from './component/sectionBanner3/Banner3';
import BeforeFooter from './component/beforeFooter/BeforeFooter';
import Footer from './component/footer/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <Slide/>
        <SectionBanner/>
        <Banner2
        img="bn2.jpg"
        title="퀄리티있는 브랜딩, 비디온리 하세요"
        desc="나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요!"
        button="나에게 맞는"
        />
        <VideoItem/>
        <Banner3/>
        <Banner2 
        img="bn21.jpg"
        title="팀원들과 함께 공유하며 작업하세요"
        desc="작업량이 많을 때, 마감으로 정신없을 때 바쁠 때 주고받는 파일이 말썽이라면? 비디온리 하세요!"
        />
        <BeforeFooter/>
        <Footer/>
    </div>
  );
}

export default App;
