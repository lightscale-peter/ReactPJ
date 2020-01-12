import React, {Component} from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {elementsToArray} from '../../../utils';

class GoodsViewTop extends Component{

    buyButtonDom = null;
    selectOption = null;

    static defaultProps = {
        backgroundColor: '#f8f8f8'
    }

    componentDidMount(){
        const {updateBuyButtonDom} = this.props;
        updateBuyButtonDom(this.buyButtonDom);
    }

    handleOptionSelect(e){
        // console.log('e', e.currentTarget);
        e.currentTarget.classList.toggle('open');

        let optionDom = e.currentTarget.children;
        // let optionLength = e.currentTarget.children.length;
        let optionArray = elementsToArray(optionDom);

        optionArray.forEach((val, index) => {
            val.classList.remove('on');
        });

        e.target.classList.add('on');
        this.selectOption.value = e.target.dataset.value;
    }

    toggleShowBuyInfo = () =>{
        const {dimDom} = this.props;
        // this.buyButtonDom.style.height = this.buyButtonDom.scrollHeight + 'px';
        this.buyButtonDom.classList.add('on');
        dimDom.classList.add('on');
    }

    render(){
        const {backgroundColor} = this.props;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2500
        };

        return(
            <div className="goodsview__upper-info-wrapper" style={{backgroundColor: backgroundColor}}>
                <div className="goodsview__upper-info">
                    <div className="goodsview__upper-info-thumbnail">
                        <Slider {...settings}>
                            <img src={require(`../../../assets/images/goodsview/1000000000/thumbnails/aw_1.jpg`)} alt="썸네일"/>
                            <img src={require(`../../../assets/images/goodsview/1000000000/thumbnails/aw_2.jpg`)} alt="썸네일"/>
                            <img src={require(`../../../assets/images/goodsview/1000000000/thumbnails/aw_3.jpg`)} alt="썸네일"/>
                            <img src={require(`../../../assets/images/goodsview/1000000000/thumbnails/aw_4.jpg`)} alt="썸네일"/>
                        </Slider>
                    </div>
                    <div className="goodsview__upper-info-text">
                        <div className="goodsview__upper-info-logo-likebtn">
                            <div><i className="icon-nomad_logo"></i></div>
                            <div className="goodsview__upper-info-likebtn"><img src={require(`../../../assets/images/common/heart_grey.png`)} alt="좋아요버튼"/></div>
                        </div>
                        <div className="goodsview__upper-info-title">
                            <h3>Base Station (애플워치형)</h3>
                        </div>
                        <div className="goodsview__upper-info-subtitle">폰, 에어팟, 애플워치, 맥북충전을 한번에</div>
                        <div className="goodsview__upper-info-thumbnail--mobile">
                            <Slider {...settings}>
                                <img src={require(`../../../assets/images/goodsview/1000000000/thumbnails/aw_1.jpg`)} alt="썸네일"/>
                                <img src={require(`../../../assets/images/goodsview/1000000000/thumbnails/aw_2.jpg`)} alt="썸네일"/>
                                <img src={require(`../../../assets/images/goodsview/1000000000/thumbnails/aw_3.jpg`)} alt="썸네일"/>
                                <img src={require(`../../../assets/images/goodsview/1000000000/thumbnails/aw_4.jpg`)} alt="썸네일"/>
                            </Slider>
                        </div>
                        <div className="goodsview__upper-info-price-mileage">
                            <div className="goodsview__upper-info-price">20,500원</div>
                            <div className="goodsview__upper-info-mileage">적립 4100원</div>
                        </div>
                        <div className="goodsview__upper-info-detail-text">
                            노마드 베이스 스테이션 시리즈는 여러 디바이스들을 동시 유무선 충전하면서 
                            각각 모두 고속 충전을 지원하는 현존 최고의 강력하고 빠른 멀티 충전 허브입니다. 
                            애플워치를 충전할 수 있는 타입과 맥북을 충전할 수 있는 옵션이 다른 두가지 타입으로 제공됩니다. 
                            (주문시 선택)
                        </div>
                        <div className="goodsview__upper-info-option-buybutton" ref={ref => {this.buyButtonDom = ref}}>
                            <div className="goodsview__upper-info-option-wrapper">
                                <select className="goodsview__upper-info-select-option mobile-only" ref={ref=>{this.selectOption = ref}}>
                                    <option>타입 선택</option>
                                    <option value="basic">Basic Edition</option>
                                    <option value="apple">Apple Edition</option>
                                </select>
                                <div className="goodsview__upper-info-option desktop-only" onClick={(e) => this.handleOptionSelect(e)}>
                                    <div className="default on">타입 선택</div>
                                    <div data-value="basic">Basic Edition</div>
                                    <div data-value="apple">Apple Edition</div>
                                </div>
                            </div>
                            <div className="goodsview__upper-info-buybutton">구매하기</div>
                        </div>
                        <div className="goodsview__upper-info-fake-buybutton" onClick={this.toggleShowBuyInfo}>
                            구매하기
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsViewTop;