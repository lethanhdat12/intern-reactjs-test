import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerbox">
                    <div className="footerbox__infor">
                        <ul className="footerbox__infor--list">
                            <li className="footerbox__infor--item">
                                이용약관
                            </li>
                            <li className="footerbox__infor--item">
                                개인정보처리방침
                            </li>
                            <li className="footerbox__infor--item">
                                고객센터
                            </li>
                        </ul>
                        <div className="footerbox__infor--desc">
                        <p className="footer__infor-t">
                            비디온리 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000
                        </p>
                        <p className="footer__infor-t">
                            이메일 : test0101@vidio.co.kr | FAX : 070-0000-0000
                        </p>
                        <p className="footer__infor-t">
                            개인정보처리방침
                        </p>
                        </div>
                        <p className="footer__infor-t">
                            Copyright© VIDIONLY All rights reserved.
                        </p>
                    </div>
                    <div className="footerbox__social">
                        <ul className="footerbox__social--list">
                            <li className="footerbox__social--item">
                                <img src="./access/img/sc1.png" alt="" />
                            </li>
                            <li className="footerbox__social--item">
                                <img src="./access/img/sc2.png" alt="" />
                            </li>
                            <li className="footerbox__social--item">
                                <img src="./access/img/sc3.png" alt="" />
                            </li>
                            <li className="footerbox__social--item">
                                <img src="./access/img/sc4.png" alt="" />
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;