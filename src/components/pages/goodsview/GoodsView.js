import React, {Component} from 'react';

import GoodsViewDetail from './GoodsViewDetail';
import GoodsViewTab from './GoodsViewTab';
import GoodsViewTop from './GoodsViewTop';
import {Loading} from '../../common';


class GoodsView extends Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        const {updateBuyButtonDom, toggleShowBuyInfo, isMobile} = this.props;

        return(
            <Loading>
                <article className="article">
                    <GoodsViewTop 
                        updateBuyButtonDom={updateBuyButtonDom}
                        toggleShowBuyInfo={toggleShowBuyInfo}
                        />
                    <GoodsViewTab />
                    <GoodsViewDetail isMobile={isMobile} />
                </article> 
            </Loading>
        )
    }
}

export default GoodsView;