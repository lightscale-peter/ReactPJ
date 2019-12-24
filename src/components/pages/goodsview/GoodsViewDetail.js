import React, {Component} from 'react';


class GoodsViewDetail extends Component{

    brandWindow = null;
    toggleButton = null;

    

    handleOpenWindow(){
        let clientHeight = this.brandWindow.clientHeight; // 보여지는 높이
        let scrollHeight = this.brandWindow.scrollHeight; // 실제 높이

        if(clientHeight == 60){ // 
            this.brandWindow.style.height = scrollHeight + 'px';
            this.toggleButton.classList.add('on');
        }else{ //열려있을떄
            this.brandWindow.style.height = '60px';
            this.toggleButton.classList.remove('on');
        }   
    }
  

    render(){

        const {isMobile} = this.props;
        let mobilePath = isMobile ? 'mobile/' : '';

        return (
            <div className="goodsview__middle-info-wrapper">
                <div className="goodsview__lower-info">
                    <div className="goodsview__detail">
                        <div className="goodsview-detail-brand-info-wrapper" ref={ref => {this.brandWindow = ref}}>
                            <div className="goodsview__detail-brand-info" onClick={() => this.handleOpenWindow()}>
                                <div>브랜드소개</div>
                                <div><i className="icon-nomad_logo"></i></div>
                                <div><img ref={ref => {this.toggleButton = ref}} className="goodsview__detail-brand-toggle-button" src={require(`../../../assets/images/common/ico_close.png`)} alt="플러스버튼"/></div>
                            </div>
                            <div className="goodsview__detail-brand-info-article">
                                <div className="goodsview__detail-brand-info-image">
                                    <div><img src={require(`../../../assets/images/goodsview/1000000000/brand1.jpg`)} alt="브랜드 이미지"/></div>
                                    <div><img src={require(`../../../assets/images/goodsview/1000000000/brand2.jpg`)} alt="브랜드 이미지"/></div>
                                </div>
                                <div className="goodsview__detail-brand-info-text">
                                    <div className="goodsview__detail-brand-info-title">
                                        <h6>Nomad 브랜드 소개</h6>
                                    </div>
                                    <div className="goodsview__detail-brand-info-contents">
                                        2012년 뉴욕에서 설립된 Nomad는 케이스, 충전기 등 모바일 액세서리를 프리미엄 레벨의 제품으로 만드는 브랜드입니다. 
                                        Nomad는 필요한 분량의 생필품만 챙겨 온 세상을 떠돌아다니는 ‘유목민’처럼 미니멀하지만 우리의 삶에 활력을 주는 실용적인 제품을 제작합니다. 
                                        Nomad의 제품들은 품질이 가장 좋은 튼튼한 소재들을 사용하여 만들어지며, 모든 제품은 이런 철학에 따라 세심하게 만들어집니다.
                                    </div>
                                    <div className="goodsview__detail-brand-info-close-button" onClick={() => this.handleOpenWindow()}>
                                        접기
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <section className="goodsview__detail-video">
                            <video poster={require(`../../../assets/images/goodsview/1000000000/video/base_station.jpg`)} controls>
                                <source src={require(`../../../assets/images/goodsview/1000000000/video/base_station.m4v`)} type="video/mp4" />
                                <source src={require(`../../../assets/images/goodsview/1000000000/video/base_station.webm`)} type="video/webm" />
                            </video>
                        </section>
    
                        <section className="goodsview__detail-desc">
                            <div className="goodsview__detail-desc-text">
                                <h3>Apple Watch Edition</h3>
                                <div className="goodsview__detail-sub-text">
                                    베이스 스테이션 애플워치 에디션은 기본 고속 무선충전 외에 애플워치 전세대를 충전 할 수 있습니다 (총 3대 디바이스)
                                </div>
                            </div>
                            <img src={require(`../../../assets/images/${mobilePath}goodsview/1000000000/1-1.jpg`)} alt="브랜드 이미지"/>
                        </section>
                    </div>
                </div>
            </div>
        );  
    }
}

export default GoodsViewDetail;