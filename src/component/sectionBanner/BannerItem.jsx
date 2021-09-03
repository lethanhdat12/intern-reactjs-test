
const BannerItem = (props)=>{
    return (
        <div className="banner__item" style={{backgroundImage : `url(` + props.img + `)`}}>
              <div className="banner__item--top">
                  <span className="banner__item--top-text">첫번째</span>
                  <span className="banner__item--top-arrow"><i className="fas fa-arrow-right"></i></span>
              </div>
              <h3 className="banner__item--title">{props.children}</h3>
        </div>
    )
}

export default BannerItem;