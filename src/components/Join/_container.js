import React, { Component} from 'react';
import Join from "./presenter.js";
// import Logo from "../Logo";
import {Route} from 'react-router-dom';


class Container extends Component{
    
    state= {
        email_value: '123',
        name_value: '123',
        new_password_value: '',
        check_password_value: '',
    }

    
    handleChangeJoin = (e) => {
        console.log(typeof(e.target.name));
        if(e.target.name === "email") {
            this.setState({
                email_value : e.target.value
            })
        } else if (e.target.name === "name") {
            this.setState({
                name_value : e.target.value
            })
        } else if (e.target.name === "new_password") {
            this.setState({
                new_password_value : e.target.value
            })
        } else if (e.target.name === "check_password") {
            this.setState({
                check_password_value : e.target.value
            })
        }
    }   

    handleJoinClick = () => {
        console.log('join', this.state.email_value, this.state.name_value);
    
    }

    render(){
        console.log("a");
        console.log('join', this.state.email_value);
        return(    
            <Route
                exact path="/join"
                render={() => <Join
                    {...this.state}
                    onChangeJoin = {this.handleChangeJoin}
                    onClickButton={this.handleJoinClick}
                />}
            />
        );
    }
}

export default Container;