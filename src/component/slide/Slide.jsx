import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slide.scss'
import SlideItem from "./SlideItem";


const Slide = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
    };
    return (
        <div className="container">
            <div className="slide">
                <div>
                    <div className="slide__header">
                        <div className="slide__title">
                            <span>기업들의 템플릿 제작</span>
                        </div>
                        <a href="#" className="slide__more"> more <i className="fas fa-chevron-right"></i> </a>
                    </div>

                    <Slider {...settings}>
                        <SlideItem img="./access/img/sl4.gif" >
                        </SlideItem>
                        <SlideItem img="./access/img/sl1.gif">
                            한낮 무더위 점심네뉴는 <span className="t-blue">냉면이 최고!</span>
                        </SlideItem>
                        <SlideItem img="./access/img/sl5.gif" >
                            <span className="t-yellow">언제 어디서나</span> 휴가 분위기 물씬~
                        </SlideItem>
                        <SlideItem img="./access/img/sl2.gif" >
                            가족과 함께 즐거운 피크닉
                        </SlideItem>
                        <SlideItem img="./access/img/sl3.gif" >
                            가격만 봐도 힘이 나는 <span className="t-grow">국민할인</span>
                        </SlideItem>
                        <SlideItem img="./access/img/sl6.gif" >
                            올 여름 <span className="t-green">매실아 부탁해!</span>
                        </SlideItem>
                    </Slider>
                </div>
            </div>



        </div>

    );
}

export default Slide;