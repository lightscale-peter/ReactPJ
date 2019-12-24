import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import {isMobile} from '../utils'
import {Header, SideMenu, Footer} from './common';
import {Main, GoodsView} from './pages';

class App extends Component{

    state = {
        sideMenuDom: null,
        buyButtonDom: null,
        dimDom: null,
        isMobile: null
    }

    setIsMobile = () =>{
        this.setState({
            isMobile: isMobile()
        });
    }
    
    componentDidMount(){
        this.setIsMobile();
        window.addEventListener('resize', ()=>{
            // console.log('isMobile', isMobile());
            this.setIsMobile();
        });
    }

    componentWillUnmount(){
        // window.removeEventListener('resize');
    }

    updateSideMenuDom = (sideMenuDom) =>{
        this.setState({
            sideMenuDom: sideMenuDom
        });
    }
    updateBuyButtonDom = (buyButtonDom) =>{
        this.setState({
            buyButtonDom: buyButtonDom
        });
    }
    updateHeaderDimDom = (dimDom) =>{
        this.setState({
            dimDom: dimDom
        });
    }

    toggleSideMenu = () =>{
        const {sideMenuDom, dimDom} = this.state;
        sideMenuDom.classList.toggle('on');
        dimDom.classList.toggle('on');
    }
    toggleShowBuyInfo = () =>{
        const {buyButtonDom, dimDom} = this.state;
        buyButtonDom.style.height = buyButtonDom.scrollHeight + 'px';
        dimDom.classList.toggle('on');
    }

    closeDim = () =>{
        const {sideMenuDom, buyButtonDom, dimDom} = this.state;
        dimDom.classList.remove('on');
        sideMenuDom.classList.remove('on');
        buyButtonDom.style.height = 0;
    }

    render(){

        const {isMobile} = this.state;
        return (
            <BrowserRouter>
                <Header 
                    toggleSideMenu={this.toggleSideMenu}
                    updateHeaderDimDom={this.updateHeaderDimDom} 
                    closeDim={this.closeDim}
                    />
                <SideMenu 
                    toggleSideMenu={this.toggleSideMenu} 
                    updateSideMenuDom={this.updateSideMenuDom}
                    />
                <Route exact path="/">
                    <Main isMobile={isMobile} />
                </Route>
                <Switch>
                    <Route path="/goodsView">
                        <GoodsView 
                            toggleShowBuyInfo={this.toggleShowBuyInfo}
                            updateBuyButtonDom={this.updateBuyButtonDom}
                            isMobile={isMobile}
                            />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default App;