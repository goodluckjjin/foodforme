import React from "react";
import './style.scss';

const Input = (props) => {
    
    return (
        <div className ="input_area">
            <input
                name={props.name}
                type={props.type}
                value={props.value}
                onChange = {props.onChange}
                placeholder = {props.placeholder}
            />
            
        </div>
    )

}

export default Input;