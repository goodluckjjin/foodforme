import React, { Component } from 'react';

class Button extends Component {

    handleButtonClick = (e) => {
        console.log(this.props.email_value);


        if (e.target.name === "login") {
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

    }

    render() {
        // console.log(this.state); 
        // onClickButton = {this.handleButtonClick}

        const { email_value, password_value, new_password_value, check_password_value } = this.props;
        console.log(email_value);
        return (
            <div className="button_wrap">
                <button
                    type={this.props.type}
                    name={this.props.name}
                    onClick={this.props.onClickButton}
                >{this.props.buttonText}</button>
            </div>
        );
    }
}

export default Button;