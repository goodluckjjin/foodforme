import React, { Component} from 'react';
import Join from "./presenter.js";


class Container extends Component{
    
    state= {
        user_email: '',
        user_name: '',
        new_password: '',
        check_password: '',
    }

    render(){
        return(    
            <Join />
        );
    }
}

export default Container;