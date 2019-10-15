import React,{Component} from 'react';
import MyPage from "./presenter.js";
import {Route} from "react-router-dom";


class Container extends Component{
    
    render(){
        return(    
            <Route 
                path="/mypage"
                render={() => <MyPage />}
            />
        );
    }
}

export default Container;