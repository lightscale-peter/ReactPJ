import React, {Component} from 'react';
import GoodsViewTop from '../components/pages/goodsview/GoodsViewTop';
import {connect} from 'react-redux';
import * as updateDomActions from '../store/modules/updateDom';

class GoodsViewTopContainer extends Component{
    render(){
        const {dimDom, updateBuyButtonDom} = this.props;

        return (
            <GoodsViewTop dimDom={dimDom} updateBuyButtonDom={updateBuyButtonDom} />
        )
    }
}


const mapStateToProps = (state) =>({
    dimDom: state.updateDom.dimDom
});

const mapDispatchToProps = (dispatch) => ({
    updateBuyButtonDom: (dom) => dispatch(updateDomActions.updateBuyButtonDom(dom))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsViewTopContainer);