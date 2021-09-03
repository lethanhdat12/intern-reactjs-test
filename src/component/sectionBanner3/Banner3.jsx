import './Banner3.scss'
const Banner3 = ()=>{
    return(
       <section className="banner3">
          <div className="container">
              <h3 className="banner3__title">체험 가능한 템플릿</h3>
              <div className="banner3__container">
              <div className="row">
                  <div className="col-md-4 col-lg-4 col-sm-12">
                      <div className="banner3__box">
                          <div className="banner3__box--icon">
                              <img src="./access/img/icon_01.png" alt="" />
                          </div>
                          <p className="banner3__box--title">사용중인 기업</p>
                          <p className="banner3__box--num">41</p>
                      </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                      <div className="banner3__box">
                          <div className="banner3__box--icon">
                              <img src="./access/img/icon_02.png" alt="" />
                          </div>
                          <p className="banner3__box--title">완료한 템플릿</p>
                          <p className="banner3__box--num">164</p>
                      </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-sm-12">
                      <div className="banner3__box">
                          <div className="banner3__box--icon">
                              <img src="./access/img/icon_03.png" alt="" />
                          </div>
                          <p className="banner3__box--title">체험가능한  템플릿</p>
                          <p className="banner3__box--num">82</p>
                      </div>
                  </div>
              </div>
              </div>
            <p className="banner3__text">나에게 맞는 템플릿, 망설이지 말고 지금 직접 체험해보세요!</p>
            <button className="btn btn-oranger">시작하기</button>
          </div>
       </section>
    )
}

export default Banner3;