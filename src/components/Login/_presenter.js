import React from 'react';
import Button from '../Button';
import Logo from "../Logo";
import './style.scss';
import Input from '../Input';
import { NavLink } from 'react-router-dom';

const Login = (props) => {

    return(
        <div className="wrapper">
            <div className="contents">
                <div className="leftBox">
                    <Logo />
                    <div className="title_box">
                        <h1 className="m_title">WELCOME</h1>
                        <p className="desc1">당신의 체질에 맞는 음식점을 추천해드립니다.</p>
                        <p className="desc2">FoodForMe에서 더 건강한 몸을 get하세요!</p>
                    </div>
                    <div className="login_box">
                        <Input type="email" name="user_email" placeholder="email를 입력해주세요" {...props}/>
                        <Input type="password" name="user_password" placeholder="password를 입력해주세요" {...props}/>
                        <div className="checkBox">
                            <label className="autoLogin">
                                <input type="checkbox" />
                                <span>자동 로그인하기</span>
                            </label>
                            <a className="findPw" href="">Forget password</a>
                        </div>
                        <div className="btn_box">
                            {/* <Button type="submit" name="login" {...props}>Login</Button> */}
                            <Button type="submit" name="login" {...props} onClickButton={props.onClickButton}/>
                            <NavLink className="link_button" to="/join" name="join">Join</NavLink>
                            {/* <Button type="button" name="join" {...props}/> */}
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

export default Login;