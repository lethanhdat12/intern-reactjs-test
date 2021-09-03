import BannerItem from "./BannerItem"
import './Banner.scss';
const SectionBanner = (props)=>{
    return (
        <div className="banner">
            <div className="container">
                <p className="banner__Total">Tutorial Guide</p>
                <h1 className="banner__title">영상 만들기, 어렵지 않아요</h1>
                <p className="banner__desc"> <span>나에게 맞는 템플릿,</span>   망설이지 말고 지금 직접 체험해보세요!</p>
                <div className="banner__box">
                    <BannerItem img="./access/img/b1.gif">   
                       <span>내 브랜드에 맞는</span>   영상 만들기 
                    </BannerItem>
                    <BannerItem img="./access/img/b3.gif">
                        <span>작업자들이 소통하며</span>  템플릿 영상 작업
                    </BannerItem>
                    <BannerItem img="./access/img/b2.gif">
                        <span>단 하나 뿐인</span>내 브랜드 영상 제작 완료
                    </BannerItem>
                </div>
            </div>

        </div>
    )
}
export default SectionBanner;