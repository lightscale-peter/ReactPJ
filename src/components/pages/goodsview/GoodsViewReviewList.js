import React, {Component} from 'react';
import Slider from "react-slick";

class GoodsViewReviewList extends Component{

    state = {
        starTag : []
    }

    drawStarTag = () =>{
        const {list} = this.props;
        const fullStar = list.star;
        let startTagArray = [];

        for(let i=0; i<5; i++){
            if(i < fullStar){
                startTagArray.push(<i className="icon-star_full" key={i}></i>);
            }else{
                startTagArray.push(<i className="icon-star_empty" key={i}></i>);
            }   
        }
        this.setState({
            starTag: startTagArray
        })
    }

    componentDidMount(){
        this.drawStarTag();
    }

    render(){
        const {starTag} = this.state;
        const {list} = this.props;
        const imageWrappers = list.imgs.map((val, index) => {
            return (
                <div className="goodsview__review-row-img-wrapper" key={index}>
                    <img alt="reviewImg" src={require(`../../../assets/images/board/review/${val}`)} />
                </div>
            );
        });
        const images = list.imgs.map((val, index) =>{
            return(
                <img alt="reviewImg" src={require(`../../../assets/images/board/review/${val}`)} key={index} />
            );
        });


        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false
        };

        return(
            <div className="goodsview__review-row">
                {/* 별점 */}
                <div className="goodsview__review-row-star">
                    {starTag}
                </div>
                {/* 내용 */}
                <div className="goodsview__review-row-article">
                    {list.article}
                </div>
                {/* 이미지 */}
                <div className="goodsview__review-row-imgs">
                    {imageWrappers}
                </div>
                {/* 날짜, 댓글 추천 */}
                <div className="goodsview__review-row-date">
                    <div className="goodsview__review-date-id">
                        <div>{list.date}</div>
                        <div>{list.wrtier}</div>
                    </div>
                    <div className="goodsview__review-reply-like">
                        <div className="goodsview__review-reply">
                            <i className="icon-message"></i>0
                        </div>
                        <div className="goodsview__review-like">
                            <i className="icon-thumb"></i>0
                        </div>
                    </div>
                </div>
                {/* 이미지 슬라이더 실행 */}
                <div className="goodsview__review-imgs-popup">
                    <Slider {...settings}>
                        {images}
                    </Slider>
                </div>
            </div>
        )
    }
}

export default GoodsViewReviewList;