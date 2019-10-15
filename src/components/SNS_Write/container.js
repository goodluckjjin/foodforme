import React, {Component} from 'react';
import SNS_Write from "./presenter.js";
import {Route} from "react-router-dom";


class Container extends Component{
    
    render(){
        return(    
            <Route
                path="/mypage/sns_write"
                render={() => <SNS_Write />}
            />
        );
    }
}

export default Container;