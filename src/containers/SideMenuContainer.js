import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as updateDomActions from '../store/modules/updateDom';
import SideMenu from '../components/common/SideMenu';

class SideMenuContainer extends Component{
    render(){

        const {updateSideMenuDom} = this.props;

        return (
            <SideMenu updateSideMenuDom={updateSideMenuDom} />
        )
    }
}

const mapStateToProps = (state) => ({
    dimDom : state.updateDom.dimDom
});

const mapDispatchToProps = (dispatch) => ({
    updateSideMenuDom: (dom) => dispatch(updateDomActions.updateSideMenuDom(dom))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuContainer);