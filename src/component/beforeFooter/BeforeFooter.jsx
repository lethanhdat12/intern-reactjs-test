import './BeforeFooter.scss';

const BeforeFooter = ()=>{
    return (
        <div className="before">
            <div className="container">
                <p className="before__title">한 눈에 보는 템플릿 절차</p>
                <div className="before__desc">
                   <p>비디온리가 아직 고민되시나요?</p> 
                   <p>비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다.</p> 
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="before__col">
                            <img src="./access/img/bf1.png" alt="" className="before__col--img" />
                            <p className="before__col-title t-oranger">이미지 찾기</p>
                            <p className="before__col-desc">내 회사에 맞는 이미지를 찾아 정합니다.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="before__col">
                            <img src="./access/img/bf2.png" alt="" className="before__col--img" />
                            <p className="before__col-title t-oranger">만들기</p>
                            <p className="before__col-desc">정해둔 이미지에 맞춰 템플릿을 만듭니다.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="before__col">
                            <img src="./access/img/bf3.png" alt="" className="before__col--img" />
                            <p className="before__col-title t-oranger">정리하기</p>
                            <p className="before__col-desc">회사와 비디온리가 소통을 통해 퀄리티를 높입니다.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-3">
                        <div className="before__col">
                            <img src="./access/img/bf4.png" alt="" className="before__col--img" />
                            <p className="before__col-title t-oranger">제작 완료</p>
                            <p className="before__col-desc">세상에 단 하나 뿐인 영상 제작 완료!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeforeFooter;