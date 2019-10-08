import React from "react";
// import Button from "../Button";
// import Logo from "../Logo";
import './style.scss';

const Join = (props) => {
    return (
        <div className="wrapper">
            <div className="contents">
                <div className="leftBox">
                    <div className="logo"></div>
                    <div className="title_box">
                        <h1 className="m_title">JOIN</h1>
                        <p className="desc">건강한 FoodForMe와 함께해요</p>
                    </div>
                    <div className="login_box">
                        <div className="login_input"></div>
                        <div className="btn_box">
                        </div>
                    </div>
                    <div className="text">
                        <span className="text1">Food For Me 이용약관을 확인하세요</span>
                        <span className="text2">Term and Conditions Privarcy and Policy</span>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="right_logo"></div>
                </div>
            </div>
        </div>
    );
}

export default Join;