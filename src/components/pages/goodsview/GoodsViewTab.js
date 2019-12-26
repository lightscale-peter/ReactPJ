import React, {Component} from 'react';

class GoodsViewTab extends Component{

    tabButtonsDom = null;

    componentDidMount(){
        // this.tabButtonsDom.children.addEventList
    }

    render(){
        return(
            <div className="goodsview__tab-buttons" ref={ref=>{this.tabButtonsDom = ref}}>
                <div className="on">상세정보</div>
                <div>리뷰</div>
                <div>Q&A</div>
                <div>배송/환불</div>
            </div>
        )
    }
}

export default GoodsViewTab