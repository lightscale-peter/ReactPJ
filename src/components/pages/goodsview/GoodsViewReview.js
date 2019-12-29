import React, {Component} from 'react';

class GoodsViewReview extends Component{
    render(){

        console.log('sdffdsfsd', require('../../../assets/images/goodsview/1000000000/1-2.jpg'))

        return(
            <div className="goodsview__article">
                <div className="goodsview__review">
                    <div className="goodsview__review-title">
                        <div>
                            <h5>리뷰(0)</h5>
                        </div>
                        <div className="goodsview__review-write-button">
                            <i className="icon-camera"></i>올리기
                        </div>
                    </div>
                    <div className="goodsview__review-sub-title">
                        * 리뷰를 작성해 주세요.
                    </div>
                    <div className="goodsview__review-rows-wrapper">
                        <div className="goodsview__review-row">
                            {/* 별점 */}
                            <div className="goodsview__review-row-star">
                                <i className="icon-star_full"></i>
                                <i className="icon-star_full"></i>
                                <i className="icon-star_full"></i>
                                <i className="icon-star_full"></i>
                                <i className="icon-star_full"></i>
                            </div>
                            {/* 내용 */}
                            <div className="goodsview__review-row-article">
                                다른 브랜드에는 없는 고급진 색이 마음에 들어서 구매했어요 
                                소음이 있긴 있는데 손풍기 처음 사용해봐서 소음이 크다 작다 비교는 못하겠어요 
                                시원하고 예쁩니다
                            </div>
                            {/* 이미지 */}
                            <div className="goodsview__review-row-imgs">
                                <div className="goodsview__review-row-img-wrapper">
                                    <img src={require('../../../assets/images/goodsview/1000000000/1-2.jpg')} />
                                </div>
                                <div className="goodsview__review-row-img-wrapper">
                                    <img src={require('../../../assets/images/goodsview/1000000000/1-1.jpg')} />
                                </div>
                            </div>
                            {/* 날짜, 댓글 추천 */}
                            <div className="goodsview__review-row-date">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsViewReview;