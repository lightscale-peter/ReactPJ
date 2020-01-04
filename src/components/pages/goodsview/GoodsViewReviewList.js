import React, {Component} from 'react';

class GoodsViewReviewList extends Component{



    render(){

        const {list} = this.props;

        return(
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
                        <img src={require('../../../assets/images/board/review/1-2.jpg')} />
                    </div>
                    <div className="goodsview__review-row-img-wrapper">
                        <img src={require('../../../assets/images/board/review/2-1.jpg')} />
                    </div>
                </div>
                {/* 날짜, 댓글 추천 */}
                <div className="goodsview__review-row-date">
                    <div className="goodsview__review-date-id">
                        <div>2019.12.30</div>
                        <div>bkshin</div>
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
            </div>
        )
    }
}

export default GoodsViewReviewList;