import React, {Component} from 'react';

class BrandTemplate1 extends Component{

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

        const {value} = this.props;

        return (
            <div className="goodsview-detail-brand-info-wrapper" ref={ref => {this.brandWindow = ref}}>
                <div className="goodsview__detail-brand-info" onClick={() => this.handleOpenWindow()}>
                    <div>브랜드소개</div>
                    <div><i className={`icon-${value.brandNm}_logo`}></i></div>
                    <div><img ref={ref => {this.toggleButton = ref}} className="goodsview__detail-brand-toggle-button" src={require(`../../../../assets/images/common/ico_close.png`)} alt="플러스버튼"/></div>
                </div>
                <div className="goodsview__detail-brand-info-article">
                    <div className="goodsview__detail-brand-info-image">
                        <div><img src={require(`../../../../assets/images/goodsview/${value.goodsNo}/brand1.jpg`)} alt="브랜드 이미지"/></div>
                        <div><img src={require(`../../../../assets/images/goodsview/${value.goodsNo}/brand2.jpg`)} alt="브랜드 이미지"/></div>
                    </div>
                    <div className="goodsview__detail-brand-info-text">
                        <div className="goodsview__detail-brand-info-title">
                            <h6>{value.brandNm} 브랜드 소개</h6>
                        </div>
                        <div className="goodsview__detail-brand-info-contents">
                            ${value.article}
                        </div>
                        <div className="goodsview__detail-brand-info-close-button" onClick={() => this.handleOpenWindow()}>
                            접기
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default BrandTemplate1;