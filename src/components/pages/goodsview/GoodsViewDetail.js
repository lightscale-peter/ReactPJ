import React, {Component} from 'react';
import {
    ImageTemplate1, 
    VideoTemplate1,
    BrandTemplate1
} from './templates';

class GoodsViewDetail extends Component{

    state = {
        section: [
            {
                key: 0,
                type: 'brand1',
                goodsNo: '1000000000',
                brandNm: 'nomad',
                article: `2012년 뉴욕에서 설립된 Nomad는 케이스, 충전기 등 모바일 액세서리를 프리미엄 레벨의 제품으로 만드는 브랜드입니다. 
                        Nomad는 필요한 분량의 생필품만 챙겨 온 세상을 떠돌아다니는 ‘유목민’처럼 미니멀하지만 우리의 삶에 활력을 주는 실용적인 제품을 제작합니다. 
                        Nomad의 제품들은 품질이 가장 좋은 튼튼한 소재들을 사용하여 만들어지며, 모든 제품은 이런 철학에 따라 세심하게 만들어집니다.`
            },
            {
                key: 1,
                type: 'video1',
                goodsNo: '1000000000',
                videoNm: 'base_station'
            },
            {
                key: 2,
                type: 'image1',
                goodsNo: '1000000000',
                title: 'Apple Watch Edition',
                article: '베이스 스테이션 애플워치 에디션은 기본 고속 무선충전 외에 애플워치 전세대를 충전 할 수 있습니다 (총 3대 디바이스)',
                imageNm: [
                    '1-1.jpg'
                ]
            },
            {
                key: 3,
                type: 'image1',
                goodsNo: '1000000000',
                title: 'Apple Watch Edition',
                article: '베이스 스테이션 애플워치 에디션은 기본 고속 무선충전 외에 애플워치 전세대를 충전 할 수 있습니다 (총 3대 디바이스)',
                imageNm: [
                    '1-2.jpg'
                ]
            }
        ]
    }

    
  

    render(){

        const {isMobile} = this.props;

        const {section} = this.state;

        let sections = section.map((value, index) =>{
            switch(value.type){
                case 'brand1':
                    return (<BrandTemplate1 value={value} key={value.key} />);
                case 'image1':
                    return (<ImageTemplate1 value={value} isMobile={isMobile} key={value.key} />);
                case 'video1':
                    return (<VideoTemplate1 value={value} key={value.key} />)
                default:
                    return ('섹션 없음');
            }
        });

        return (

            <div className="goodsview__article">
                <div className="goodsview__detail">
                    {sections}
                </div>
            </div>

        );  
    }
}

export default GoodsViewDetail;