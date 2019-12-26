import React from 'react';

const VideoTemplate1 = ({value}) =>{
    // console.log('value.goodsNo', value.goodsNo);
    // console.log('value.videoNm', value.videoNm);
    return (
        <section className="goodsview__detail-video">
            <video poster={require(`../../../../assets/images/goodsview/${value.goodsNo}/video/${value.videoNm}.jpg`)} controls>
                <source src={require(`../../../../assets/images/goodsview/${value.goodsNo}/video/${value.videoNm}.m4v`)} type="video/mp4" />
                <source src={require(`../../../../assets/images/goodsview/${value.goodsNo}/video/${value.videoNm}.webm`)} type="video/webm" />
            </video>
        </section>
    );
}

export default VideoTemplate1;