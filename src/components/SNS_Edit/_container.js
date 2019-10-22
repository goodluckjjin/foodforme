import React, {Component} from 'react';
import SNS_Edit from "./presenter.js";
import {Route} from "react-router-dom";


class Container extends Component{
    
    render(){
        return(
            <Route 
                path="/mypage/sns_edit"
                render={() => <SNS_Edit />}
            /> 
            
        );
    }
}

export default Container;