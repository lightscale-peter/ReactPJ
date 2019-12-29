import React, {Component} from 'react';
import {elementsToArray} from '../../../utils';

class GoodsViewTab extends Component{

    tabButtonsDom = null;

    componentDidMount(){
        // this.tabButtonsDom.children.addEventList
        //document.getElementsByClassName('goodsview__tab-buttons')[0].children

        // console.log('dsfdfsd', this.tabButtonsDom.children)

        
    }

    changeTabAndView = (el) =>{

        const {handleDetailView} = this.props;

        let tabsArray = elementsToArray(this.tabButtonsDom.children);
        tabsArray.forEach((val, index) => {
            val.classList.remove('on');
        });
        el.target.classList.add('on');

        let nowTab = el.target.dataset.tab;
        handleDetailView(nowTab);
        
    }

    render(){
        return(
            <div className="goodsview__tab-buttons" onClick={this.changeTabAndView} ref={ref=>{this.tabButtonsDom = ref}}>
                <div data-tab="detail" className="on">상세정보</div>
                <div data-tab="review">리뷰</div>
                <div data-tab="qna">Q&A</div>
                <div data-tab="policy">배송/환불</div>
            </div>
        )
    }
}

export default GoodsViewTab