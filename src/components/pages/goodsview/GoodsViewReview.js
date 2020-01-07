import React, {Component} from 'react';
import GoodsViewReviewList from './GoodsViewReviewList';

class GoodsViewReview extends Component{

    state = {
        reviewList: [
            {
                reviewNo: 0,
                star: 3,
                article: '다른 브랜드에는 없는 고급진 색이 마음에 들어서 구매했어요 소음이 있긴 있는데 손풍기 처음 사용해봐서 소음이 크다 작다 비교는 못하겠어요 시원하고 예쁩니다.',
                board: 'review',
                imgs: [
                    '1-2.jpg',
                    '2-1.jpg'
                ],
                date: '2019.12.30',
                writer: 'bkshin'
            }
        ]
    }

    render(){

        const {updateDom, toggleImagesSlider} = this.props;
        const {reviewList} = this.state;

        const list = reviewList.map((val) => {
            return <GoodsViewReviewList list={val} key={val.reviewNo} updateDom={updateDom} toggleImagesSlider={toggleImagesSlider} />;
        });

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
                        {list}
                    </div>
                </div>
            </div>
        )
    }
}

export default GoodsViewReview;