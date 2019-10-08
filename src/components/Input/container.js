import React, {Component} from 'react';
import Input from "./presenter.js";


class Container extends Component(){
    
    state = {
        user_id : '',
        user_password : '',
    }

    render(){
        return(    
            <Input />
        );
    }
}

export default Container;