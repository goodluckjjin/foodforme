import React, { Component } from 'react';
// import Logo from "../Logo";
import { Route } from 'react-router-dom';
import Button from '../Button';
import Logo from "../Logo";
import './style.scss';
import Input from '../Input';
import { NavLink } from 'react-router-dom';


class Login extends Component {

    state = {
        email_value: '',
        password_value: '',
    }

    handleLoginClick = () => {
        console.log('Login');
    }

    handleChangeInput = (e) => {
        // console.log(e.target);
        // console.log(typeof(e.target.name)); //string
        if (e.target.name === "user_email") {
            this.setState({
                email_value: e.target.value
            })

        } else if (e.target.name === "user_password") {
            this.setState = ({
                password_value: e.target.value
            })
        };
    }

    render() {
        return (
            <Route
                exact path="/login"
                render={() => <LoginUI
                    {...this.state}
                    onChangeInput={this.handleChangeInput}
                    onClickButton={this.handleLoginClick}
                />} />
        );
    }
}

const LoginUI = (props) => {
    return (
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
                        <Input type="email" name="user_email" placeholder="email를 입력해주세요" {...props} />
                        <Input type="password" name="user_password" placeholder="password를 입력해주세요" {...props} />
                        <div className="checkBox">
                            <label className="autoLogin">
                                <input type="checkbox" />
                                <span>자동 로그인하기</span>
                            </label>
                            <a className="findPw" href="">Forget password</a>
                        </div>
                        <div className="btn_box">
                            {/* <Button type="submit" name="login" {...props}>Login</Button> */}
                            <Button type="submit" name="login" {...props} onClickButton={props.onClickButton} />
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

//{...state}
//{ ...state }

// state 초기 선언 해주기
// presenter.js에다 html 짜기
// scss 스타일 꾸미기
// 인사이드자바스크립트 5.1, 5.2 해오기
// <Login 
            // {...this.state} // 객체 복사해서 가져오기 
            // onChangeValue={this.handleChangeValue} // 함수 가져오는 방법
            // />