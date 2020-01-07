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
        popupSliderDom: null,
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

    updateDom = (domNmae, dom) =>{
        this.setState({
            [domNmae]: dom
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
    toggleImagesSlider = () =>{
        const {popupSliderDom, dimDom} = this.state;
        popupSliderDom.style.display = 'inherit';
        dimDom.classList.toggle('on');
    }

    closeDim = () =>{
        const {sideMenuDom, buyButtonDom, popupSliderDom, dimDom} = this.state;
        dimDom.classList.remove('on');
        sideMenuDom.classList.remove('on');
        buyButtonDom.style.height = 0;
        popupSliderDom.style.display = 'none';
    }

    render(){

        const {isMobile} = this.state;
        return (
            <BrowserRouter>
                <Header 
                    toggleSideMenu={this.toggleSideMenu}
                    updateDom={this.updateDom}
                    closeDim={this.closeDim}
                    />
                <SideMenu 
                    toggleSideMenu={this.toggleSideMenu} 
                    updateDom={this.updateDom}
                    />
                <Route exact path="/">
                    <Main isMobile={isMobile} />
                </Route>
                <Switch>
                    <Route path="/goodsView">
                        <GoodsView 
                            toggleShowBuyInfo={this.toggleShowBuyInfo}
                            toggleImagesSlider={this.toggleImagesSlider}
                            updateDom={this.updateDom}
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