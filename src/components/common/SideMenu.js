import React, {Component} from 'react';

class SideMenu extends Component{

    // dim = null;
    sideMenuDom = null;

    toggleSideMenu = () =>{
        console.log('dsdfssdf');
        const {dimDom} = this.props;
        dimDom.classList.toggle('on');
        this.sideMenuDom.classList.toggle('on');
        
    }

    componentDidMount(){
        const {updateSideMenuDom} = this.props;
        updateSideMenuDom(this.sideMenuDom);
    }
1
    render(){
        
        return(
            <div className="sidemenu">
                <div className="sidemenu__article" ref={ref => {this.sideMenuDom = ref}}>
                    <div className="sidemenu__article-close-button" onClick={this.toggleSideMenu}>
                        <img src={require('../../assets/images/common/ico_close.png')} alt="닫기" />
                    </div>
                    {/* X아이콘 */}
                    {/* 로고 */}
                    {/* 로그인, 마이페이지, 장바구니 */}
                    {/* 카테고리, 브랜드 탭 */}
                    {/* 카테고리, 브랜드 리스트 - 스크롤 */}
                    {/* 회사소개, 채용, 연락처 */}
                </div>
            </div>
        )
    }
}

export default SideMenu;