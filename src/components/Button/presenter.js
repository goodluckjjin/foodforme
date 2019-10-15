import React from "react";
import './style.scss'

const Button = (props) => {
    return (
        <div className="button_wrap">
            <button
                type={props.type}
                name={props.name}
                value={props.value}
                onClick={props.onClickButton}
            >버튼</button>
        </div>
    )
}

export default Button;