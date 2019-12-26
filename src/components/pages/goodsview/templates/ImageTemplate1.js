import React from 'react';

const GoodsViewTemplate1 = ({isMobile, value}) =>{

    let mobilePath = isMobile ? 'mobile/' : '';
    let imgTag = value.imageNm.map((val, index)=>{
        return (
            <img key={index} src={require(`../../../../assets/images/${mobilePath}goodsview/1000000000/${val}`)} alt="브랜드 이미지"/>
        );
    });

    return (
        <section className="goodsview__detail-desc">
            <div className="goodsview__detail-desc-text">
                <h3>{value.title}</h3>
                <div className="goodsview__detail-sub-text">
                    {value.article}
                </div>
            </div>
            {imgTag}
        </section>
    )
}

export default GoodsViewTemplate1;