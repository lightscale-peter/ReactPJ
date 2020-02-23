import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import {isMobile} from '../utils'
import {Footer} from './common';
import {Main, GoodsView} from './pages';

import HeaderContainer from '../containers/HeaderContainer';
import SideMenuContainer from '../containers/SideMenuContainer';
import webviewBridge from '../utils/webviewBridge';



class App extends Component{

    state = {
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
    render(){

        const {isMobile} = this.state;
        return (
            <BrowserRouter>
                <HeaderContainer />
                <SideMenuContainer />
                <Route exact path="/">
                    <Main isMobile={isMobile} />
                </Route>
                <Switch>
                    <Route path="/goodsView">
                        <GoodsView 
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