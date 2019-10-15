import React, { Component} from 'react';
import Join from "./presenter.js";
import {Route} from 'react-router-dom';


class Container extends Component{
    
    state= {
        user_email: '',
        user_name: '',
        new_password: '',
        check_password: '',
    }

    render(){
        return(    
            <Route
                exact path="/join"
                render={() => <Join/>} />
        );
    }
}

export default Container;