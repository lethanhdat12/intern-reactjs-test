
import './Header.scss'
import HeaderTop from './HeaderTop';

const Header = (props) => {
    return (
        <header className="header" style={{ backgroundImage: `url('/access/img/bg.jpg')` }}>
            <div className="header__overlay">
            </div>
            <div className="header__box">
                <div className="container">
                    <HeaderTop/>
                    <div className="header__content">
                        <h1 className="header__title">
                            <span>비디온리는</span>
                            <span>오직 당신의 브랜드만를 위해</span>
                            <span>템플릿을 만듭니다</span>
                        </h1>
                        <p className="header__note">
                            나만의 브랜드를 위한 영상 템플릿을 직접 경험해보세요.
                        </p>
                        <button className="btn tb-black btn-oranger">
                            시작하기
                        </button>
                    </div>
                </div>

            </div>
        </header>
    )
}


export default Header;