import React, {Component} from 'react';

class GoodsViewPolicy extends Component{
    render(){
        return(
            <div className="goodsview__article">
                <div className="goodsview__policy">
                    <div className="goodsview__policy-title">
                        <h4>배송 및 환불 정책</h4>
                    </div>
                    <div className="goodsview__policy-article">
                        <section className="goodsview__policy-section">
                            <div className="goodsview__policy-sub-title">
                                <h5>배송안내</h5>
                            </div>
                            <div className="goodsview__policy-sub-article">
                                기본 배송료는 2,500원이며, 50,000원 이상 구매시 무료로 배송됩니다.<br />
                                제주도는 3,500원, 도서산간 지역은 6,000원의 별도 배송비가 추가됩니다.<br />
                                (도선료 및 항공료)<br />
                                일부 가구/조명 제품의 경우 추가 배송비 및 설치비가 발생합니다.<br />
                                주문시 별도 확인이 가능합니다.

                                <div className="goodsview__policy-sub-article-table">
                                    <div>
                                        <div>배송비 \ 분류</div>
                                        <div>5만원 이하</div>
                                        <div>5만원 이상</div>
                                        <div>일부 가구/조명</div>
                                    </div>
                                    <div>
                                        <div>기본</div>
                                        <div>2500원</div>
                                        <div>무료</div>
                                        <div>주문시 확인</div>
                                    </div>
                                    <div>
                                        <div>제주도</div>
                                        <div>6000원</div>
                                        <div>3500원</div>
                                        <div>주문시 확인</div>
                                    </div>
                                    <div>
                                        <div>산간지역</div>
                                        <div>8500원</div>
                                        <div>6000원</div>
                                        <div>주문시 확인</div>
                                    </div>
                                </div>

                                제품의 배송은 접수 후 2~3일이며, 지역이나 배송업체 사정에 따라 다소 차이가 있을 수 있습니다.<br />
                                (공휴일 및 주말은 배송이 되지 않습니다.)
                            </div>
                        </section>
                        <section className="goodsview__policy-section">
                            <div className="goodsview__policy-sub-title">
                                <h5>교환 및 반품안내</h5>
                            </div>
                            <div className="goodsview__policy-sub-article">
                            제품 개봉전 단순 변심 반품은 7일 이내 신청시 100% 가능하며<br />
                            편도 배송비 2,500원 (최초 배송이 무료였을 경우 왕복 배송비 5,000원)이 부과됩니다.<br />
                            7일이내에 제품 사용중 불량이 발생하였을 경우 수리가 아닌 100% 새제품으로 교환드리며 왕복 배송료도 브런트에서 부담합니다.<br />
                            *단, 전자 제품의 경우 제품 개봉후 문제가 없는 정상품일 경우 단순 반품이 불가능합니다.
                            </div>
                        </section>
                        <section className="goodsview__policy-section">
                            <div className="goodsview__policy-sub-title">
                                <h5>제품 보증</h5>
                            </div>
                            <div className="goodsview__policy-sub-article">
                                제품 보증일은 구매일로부터 1년간입니다.<br />
                                * 보다 자세한 제품 보증 정책은 이곳을 참조하세요.
                            </div>
                        </section>
                        <section className="goodsview__policy-section">
                            <div className="goodsview__policy-sub-title">
                                <h5>고객센터 안내</h5>
                            </div>
                            <div className="goodsview__policy-sub-article">
                            전화 : 1588-3998<br />
                            E-mail : cs@brunt.co<br />
                            * 상담 가능 시간은 평일 오전 10시-13시, 14시- 17시까지입니다.
                            </div>
                        </section>
                    </div>
                </div>
            </div>        
        );
    }
}

export default GoodsViewPolicy;