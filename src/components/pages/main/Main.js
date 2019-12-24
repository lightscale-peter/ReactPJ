import React, {Component} from 'react';
import MainTopBanner from './MainTopBanner';
import {getRandomNumber} from '../../../utils';

class Main extends Component{


    state = {
        bannerInfo: [
            {
                goodsNo: '1000000000',
                goodsBrand: 'brunt',
                goodsName: '브런트 에어젯 S',
                goodsDesc: '고성능 소형 공기청정기 / 스마트 IoT모델'
            },
            {
                goodsNo: '1000000001',
                goodsBrand: 'brunt',
                goodsName: '브런트 에어젯 S',
                goodsDesc: '고성능 소형 공기청정기 / 스마트 IoT모델'
            },
            {
                goodsNo: '1000000002',
                goodsBrand: 'brunt',
                goodsName: '브런트 에어젯 S',
                goodsDesc: '고성능 소형 공기청정기 / 스마트 IoT모델'
            },
            {
                goodsNo: '1000000003',
                goodsBrand: 'brunt',
                goodsName: '브런트 에어젯 S',
                goodsDesc: '고성능 소형 공기청정기 / 스마트 IoT모델'
            },
            {
                goodsNo: '1000000004',
                goodsBrand: 'brunt',
                goodsName: '브런트 에어젯 S',
                goodsDesc: '고성능 소형 공기청정기 / 스마트 IoT모델'
            }
        ]
    }

    shouldComponentUpdate(nextProp, nextState){
        // console.log('this.props', this.props);
        // console.log('nextProp', nextProp);
        // console.log('flag', nextProp.isMobile === this.props.isMobile);
        if(nextProp.isMobile === this.props.isMobile){
            return false;
        }else{
            return true;
        }
    }

    render(){

        const {bannerInfo} = this.state;
        const {isMobile} = this.props;
        const arrayLength = bannerInfo.length;

        let randomArray = getRandomNumber(3, arrayLength);

        const list = randomArray.map(val => (
            <MainTopBanner 
                data={bannerInfo[val]} 
                key={bannerInfo[val].goodsNo} 
                isMobile={isMobile}
                />
        ));

        return(
            <article className="article">
                {list}
            </article>
            
        );
    }
}

export default Main;