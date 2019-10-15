import React,{Component} from 'react';
import Button from "./presenter.js";

// 아까 데이터를 불러오면 map를 사용했던 것이고 input이 데이터를 보내니까? 뭐라고햇징?
class Container extends Component{
    // state = {
    //     login_value : '',
    //     join_value : '',
    // }


    handleButtonClick = (e) => {
        console.log(this.props.email_value);

        
        if(e.target.name === "login") {
           return (
               alert(`EMAIL:${this.props.email_value}<br/>Password:${this.props.password_value}, 'login button'`)
            )
        }
        else if (e.target.name==="join") {
            return alert(`join을 해주세요`)
        }
    }

    render(){
        // console.log(this.state);  
        return(  
            <Button
                type={this.props.type}
                name={this.props.name}
                onClickButton = {this.handleButtonClick}
            />
        );
    }
}

export default Container;