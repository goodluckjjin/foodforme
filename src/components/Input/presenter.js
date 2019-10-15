import React from "react";
import './style.scss';

const Input = (props) => {
    
    return (
        <div className ="input_area">
            <input
                name={props.name}
                type={props.type}
                value={props.value}
                onChange = {props.onChangeInput}
                placeholder = {props.placeholder}
            />
            
        </div>
    )

}

export default Input;

// <div className ="input_area">
// <input
//     type="text"
//     value={props.user_email}
//     onChange={props.handleChange} name="user_email user_password"
// />
// {/* <input
//     type="password"
//     value={props.user_password}
//     onChange={props.handleChange} name="user_password"
// /> */}

// </div>