import React from "react";
import './style.scss';

const Input = (props) => {
    
    return (
        <div className ="input_area">
            {/* <input type="text" value={props.user_id} onChange={props.onChangeValue} name="user_id"/> */}
            <input type="text" value={props.user_id} onChange={props.onChangeValue} name="user_id"/>

        </div>
    )

}

export default Input;