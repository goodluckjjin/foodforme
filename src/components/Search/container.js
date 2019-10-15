import React, {Component} from 'react';
import Search from "./presenter.js";
import {Route} from "react-router-dom";


class Container extends Component{
    
    render(){
        return(    
            <Route
            exact path="/search"
            render={() => <Search/>}/>
        );
    }
}

export default Container;