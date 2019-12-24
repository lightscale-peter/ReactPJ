import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MainTopBanner extends Component{


    render(){
        const {isMobile} = this.props;
        const {data} = this.props;
        let mobilePath = isMobile ? 'mobile/' : '';

        return (
            <Link to="/goodsView">
                <div className="main-article">
                    <section className="main-article__top-img-banner">
                        <div className="main-article__top-img-banner-row">
                            <div className="main-article__top-img-txt">
                                <div className="main-article__top-img-txt-logo"><i className={`icon-${data.goodsBrand}_logo`}></i></div>
                                <div className="main-article__top-img-txt-desc">{data.goodsDesc}</div>
                                <div className="main-article__top-img-txt-goodsname">{data.goodsName}</div>
                                <div className="main-article__top-img-txt-gotobuy">
                                    구매하러 가기
                                </div>
                            </div>
                            <img className="img-resizable" src={require(`../../../assets/images/${mobilePath}main/${data.goodsNo}.jpg`)} alt="메인배너"/>
                        </div>
                    </section>
                </div>
            </Link>
        )
        
    }
}

export default MainTopBanner;