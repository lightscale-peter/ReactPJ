import React, {Component} from 'react';
import GoodsViewReviewList from '../components/pages/goodsview/GoodsViewReviewList';
import { connect } from 'react-redux';
import * as updateDomActions from '../store/modules/updateDom';

class GoodsViewReviewListContainer extends Component{


    render(){
        const {dimDom, updatePopupDom, updateSliderDom, list} = this.props;

        return (
            <GoodsViewReviewList dimDom={dimDom} updatePopupDom={updatePopupDom} updateSliderDom={updateSliderDom} list={list} />
        )
    }
}

const mapStateToProps = (state) =>({
    dimDom: state.updateDom.dimDom,
    popupDom: state.updateDom.popupDom
});

const mapDispatchToProps = (dispatch) => ({
    updatePopupDom: (dom) => dispatch(updateDomActions.updatePopupDom(dom)),
    updateSliderDom: (dom) => dispatch(updateDomActions.updateSliderDom(dom))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsViewReviewListContainer)