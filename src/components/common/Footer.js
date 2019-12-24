import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return (
            <footer className="footer">
                <div className="footer__about-subscribe-sns">
                    <div className="footer__about">
                        <div>회사소개</div>
                        <div>채용</div>
                        <div>연락처</div>
                    </div>
                    <div className="footer__subscribe">
                        <div>뉴스레터</div>
                        <div className="footer__subscribe-input">
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="footer__subscribe-button">구독신청</div>
                    </div>
                    <div className="footer__sns">
                        <div>F</div>
                        <div>I</div>
                    </div>
                </div>
                <div className="footer__site-info">
                    <div className="footer__site-info-rule">
                        <div>개인정보 처리 방침</div>
                        <div>이용약관</div>
                        <div>제품보증정책</div>
                    </div>
                    <div className="footer__site-info-cs">
                        <div>고객지원</div>
                        <div className="footer__site-info-cs-path">
                            <div>cs@brunt.co</div>
                            <div>1588-3998</div>
                        </div>
                        <div>월 ~ 금 10:00 ~ 17:00 (점심시간 13:00 ~ 14:00)</div>
                    </div>
                    <div className="footer__site-info-detail">
                        <div>인명(상호):브런트 주식회사</div>
                        <div>대표:남찬우</div>
                        <div>개인정보관리자:배고빈</div>
                        <div>사업자등록번호:568-86-00058</div>
                        <div>통신판매업신고번호:제 2016-서울서초-0491호</div>
                        <div>팩스번호:02-2058-1750</div>
                        <div>주소:서울특별시 서초구 양재천로 89 (올림피아빌딩) 4층 브런트</div>
                        <div>입금계좌:국민은행 851401-00-020739</div>
                    </div>  
                    <div className="footer__site-info-rights">
                        © COLLECTION.B . All rights reserved
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;