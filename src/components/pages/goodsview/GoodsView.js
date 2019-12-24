import React, {Component} from 'react';

import GoodsViewDetail from './GoodsViewDetail';
import GoodsViewTab from './GoodsViewTab';
import GoodsViewTop from './GoodsViewTop';


class GoodsView extends Component{

    state = {
        title: '',
        subtitle: '',
        price: '',
        description: '',
        option: [],
        thumbnails: []
    }

    render(){

        const {updateBuyButtonDom, toggleShowBuyInfo, isMobile} = this.props;

        return(
            <article className="article">
                <GoodsViewTop 
                    updateBuyButtonDom={updateBuyButtonDom}
                    toggleShowBuyInfo={toggleShowBuyInfo}
                    />
                <GoodsViewTab />
                <GoodsViewDetail isMobile={isMobile} />
            </article> 
        )
    }
}

export default GoodsView;