import React from "react";
// import '../App/style.scss';

const Button = (props) => {
    return (
        <div className="button_wrap">
            <button
                type={props.type}
                name={props.name}
                onClick={props.onClickButton}
            >{props.buttonText}</button>
        </div>
    )
}

export default Button;