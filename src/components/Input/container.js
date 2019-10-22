import React, { Component } from 'react';
import Input from './presenter';

class Container extends Component{
    
    // 부모Component Login으로 이동 why? button과 함께 사용하기 위하여
    // state = {
    //     email_value : '',
    //     password_value : '',
    //     name_value : ''
    // }

    // handleChangeInput = (e) => {
    //     // console.log(e.target);
    //     // console.log(typeof(e.target.name)); //string
    //     if(e.target.name === "user_email") {
    //         this.setState({
    //             email_value : e.target.value
    //         })
                
    //     } else if (e.target.name==="user_password") {
    //         this.setState = ({
    //             password_value : e.target.value
    //         })
    //     } else if (e.target.name==="user_name"){
    //         this.setState({
    //             name_value : e.target.value
    //         })
    //     };
    // }


    
    render(){
        return(
            <Input 
                type={this.props.type}
                name={this.props.name}
                onChange ={this.props.onChangeInput}
                placeholder = {this.props.placeholder}
            />
        );
    }
}

export default Container;

// handleChangeInput = (e) => {
        //1. e.target => user_email => setState => email_value
        //2. e.target => user_password => setState => password_value
        
    //     if(){
    //         this.setState({

    //         })
    //     } else {

    //     }
    // }