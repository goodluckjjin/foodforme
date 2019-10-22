import React from "react";
import Button from "../Button";
import Input from "../Input";
import Logo from "../Logo";
import './style.scss';

const Join = (props) => {
    return (
        <div className="wrapper">
            <div className="contents">
                <div className="leftBox">
                    <Logo/>
                    <div className="title_box">
                        <h1 className="m_title">JOIN</h1>
                        <p className="desc">건강한 FoodForMe와 함께해요</p>
                    </div>
                    <div className="login_box">
                        <Input type="email" name="email" value={props.email_value} placeholder="email를 입력해주세요" {...props}/>
                        <Input type="text" name="name" placeholder="이름을 입력해주세요" {...props}/>
                        <Input type="password" name="new_password" placeholder="password를 입력해주세요" {...props}/>
                        {/* <Input type="password" name="check_password" placeholder="password를 한 번 더 입력해주세요" {...props}/> */}
                        <Input type="password" name="check_password" placeholder="password를 한 번 더 입력해주세요" />
                        <div className="btn_box">
                            <Button 
                                type="submit" 
                                name="join_submit"   
                                onClickButton={props.onClickButton} 
                                buttonText="회원가입"
                            />
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