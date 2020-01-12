import React, {Component} from 'react';
import Header from '../components/common/Header';
import { connect } from 'react-redux';
import * as updateDomActions from '../store/modules/updateDom';

class HeaderContainer extends Component{

    render(){

        const {
            updateDimDom,
            popupDom, 
            sideMenuDom,
            buyButtonDom,
            sliderDom
        } = this.props;

        return (
            <Header 
                updateDimDom={updateDimDom} 
                popupDom={popupDom} 
                sideMenuDom={sideMenuDom} 
                buyButtonDom={buyButtonDom} 
                sliderDom={sliderDom}
                />
        );
    }
}


const mapStateToProps = (state) =>({
    popupDom: state.updateDom.popupDom,
    sideMenuDom: state.updateDom.sideMenuDom,
    buyButtonDom: state.updateDom.buyButtonDom,
    sliderDom: state.updateDom.sliderDom

});

const mapDispatchToProps = (dispatch) => ({
    updateDimDom: (dom) => dispatch(updateDomActions.updateDimDom(dom))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);