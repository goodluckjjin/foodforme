import React, {Component} from 'react';
import MyProfile_Edit from "./presenter.js";
import {Route} from "react-router-dom";


class Container extends Component{
    
    render(){
        return(    
            <Route 
                path="/mypage/myprofile_edit"
                render={()=><MyProfile_Edit />}
            />
        );
    }
}

export default Container;