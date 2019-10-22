import React,{Component} from 'react';
import Button from "./presenter.js";

// 아까 데이터를 불러오면 map를 사용했던 것이고 input이 데이터를 보내니까? 뭐라고햇징?
class Container extends Component{

    handleButtonClick = (e) => {
        console.log(this.props.email_value);

        
        if(e.target.name === "login") {
           return (
               alert(
                   `EMAIL: ${this.props.email_value}<br/>
                   Password: ${this.props.password_value}, 'login button'`
                   )
            )
        }

        else if (e.target.name === "join") {
            return alert(`join을 해주세요`)
        }

        // else if (e.target.name === "join_submit") {
        //     return (
        //         alert(
        //             `Email: ${this.props.email_value}<br/>
        //             Name: ${this.props.name_value}<br/>
        //             New Password: ${this.props.new_password_value}<br/>
        //             Password Check: ${this.props.check_password_value}, 'join submit button'`
        //             )
        //     )
        // }
    }

    render(){
        // console.log(this.state); 
                // onClickButton = {this.handleButtonClick}

        const { email_value, password_value, new_password_value, check_password_value} = this.props;
        console.log(email_value); 
        return(  
            <Button
                type={this.props.type}
                name={this.props.name}
                onClickButton={this.props.onClickButton}
                buttonText={this.props.buttonText}
            />
        );
    }
}

export default Container;