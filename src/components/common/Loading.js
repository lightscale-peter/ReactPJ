import React, {Component} from 'react';
import {loadCompleteDo} from '../../utils';

class Loading extends Component{

    loadingDom = null;

    componentDidMount(){
        loadCompleteDo(()=>{
            this.loadingDom.style.opacity = '1';
        });
    }

    render(){
        const {children} = this.props;

        return(
            <div className="loading" ref={ref=>{this.loadingDom = ref}}>
                {children}
            </div>
        )
    }
}

export default Loading;