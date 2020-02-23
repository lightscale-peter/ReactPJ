import React, {Component} from 'react';
// import {Map, List} from 'immutable';
// import {isMobile} from '../../utils';
import {Link} from 'react-router-dom';


class Header extends Component{

    state = {
        scrollTop: 0
    }

    dimDom = null;

    componentDidMount(){

        const {updateDimDom} = this.props;
        updateDimDom(this.dimDom);

        window.addEventListener('scroll', ()=>{

            let scrollTop_val = document.documentElement.scrollTop;

            if(scrollTop_val >= 31) scrollTop_val = 31;

            this.setState({
                scrollTop: scrollTop_val
            });
        });
    }

    componentWillUnmount(){
        window.removeEventListener('scroll');
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.scrollTop === nextState.scrollTop){
            return false;
        }else{
            return true;
        }
    }

    openSideMenu = () =>{
        const {sideMenuDom} = this.props;
        sideMenuDom.classList.add('on');
        this.dimDom.classList.add('on');
    }

    closeDim = () =>{
        const {popupDom, sideMenuDom, buyButtonDom, sliderDom} = this.props;

        this.dimDom.classList.remove('on'); //dim 없애기
        if(popupDom !== null && sliderDom !== null) {
            popupDom.classList.remove('on'); //팝업 끄기
            sliderDom.slickGoTo(0);
        }
        if(sideMenuDom !== null)
            sideMenuDom.classList.remove('on'); //사이드메뉴 닫기
        if(buyButtonDom !== null)
            buyButtonDom.classList.remove('on'); // 페이크버튼 가리기
    }

    goBackForNative = () =>{
        window.webViewBridge.goBack();
    }

    render(){
        const {scrollTop} = this.state;

        return (
            <header className="header" style={{top: scrollTop * -1 + 'px'}}>
                <div className="header__top-notice">
                    회원가입시 <strong>5%</strong> 추가 할인 / 결제마다 <strong>2%</strong> 적립
                </div>
                <div className="header__logo-menu-wrapper">
                    <div className="header__logo-menu">
                        <div className="header__mobile-menu">
                            <img onClick={this.openSideMenu} className="header_mobile-menu-img" src={require('../../assets/images/common/ico_all.png')} alt="메뉴아이콘" />
                        </div>
                        <div className="header__colb-logo">
                            <Link to="/">
                                <i className="icon-collectionb_logo_3"></i>
                            </Link>
                        </div>
                        <div className="header__desktop-menu-text-icon">
                            <div className="header__desktop-menu-text">
                                <div className="header__desktop-menu-login">로그인</div>
                                <div className="header__desktop-menu-mypage">마이페이지</div>
                            </div>
                            <div className="header__desktop-menu-icon">
                                <div className="header__desktop-menu-basket">
                                    <i className="icon-basket_1"></i>
                                    <div>0</div>
                                </div>
                                <div className="header__desktop-menu-search"><i className="icon-search"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__category-wrapper">
                    <div className="header__category">
                        <div>All</div>
                        <div>Living</div>
                        <div>Mobile Life</div>
                        <div>Kitchen</div>
                        <div>Stationery</div>
                        <div>Entertaining</div>
                        <div>Fashion & Care</div>
                        <div>Beauty</div>
                        <div>Brands</div>
                    </div>
                </div>
                <div className="header__dim" ref={ref => {this.dimDom = ref}} onClick={this.closeDim}></div>
                {
                    window.webViewBridge && (<div className="header__native-back-button" onClick={this.goBackForNative}>〈&nbsp;&nbsp;&nbsp;</div>)

                }
                
            </header>
        )
    }
}


export default Header;