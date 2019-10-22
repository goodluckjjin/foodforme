import React, { Component } from 'react';
// import Logo from "../Logo";
import { Route } from 'react-router-dom';
import Button from "../Button";
import Input from "../Input";
import Logo from "../Logo";
import './style.scss';


class Join extends Component {

    state = {
        email_value: '123',
        name_value: '123',
        new_password_value: '',
        check_password_value: '',
    }


    handleChangeJoin = (e) => {
        console.log(typeof (e.target.name));
        if (e.target.name === "email") {
            this.setState({
                email_value: e.target.value
            })
        } else if (e.target.name === "name") {
            this.setState({
                name_value: e.target.value
            })
        } else if (e.target.name === "new_password") {
            this.setState({
                new_password_value: e.target.value
            })
        } else if (e.target.name === "check_password") {
            this.setState({
                check_password_value: e.target.value
            })
        }
    }

    handleJoinClick = () => {
        console.log('join', this.state.email_value, this.state.name_value);

    }

    render() {
        console.log("a");
        console.log('join', this.state.email_value);
        return (
            <Route
                exact path="/join"
                render={() => <JoinUI
                    {...this.state}
                    onChangeJoin={this.handleChangeJoin}
                    onClickButton={this.handleJoinClick}
                />}
            />
        );
    }
}

const JoinUI = (props) => {
    return (
        <div className="wrapper">
            <div className="contents">
                <div className="leftBox">
                    <Logo />
                    <div className="title_box">
                        <h1 className="m_title">JOIN</h1>
                        <p className="desc">건강한 FoodForMe와 함께해요</p>
                    </div>
                    <div className="login_box">
                        <Input type="email" name="email" value={props.email_value} placeholder="email를 입력해주세요" {...props} />
                        <Input type="text" name="name" placeholder="이름을 입력해주세요" {...props} />
                        <Input type="password" name="new_password" placeholder="password를 입력해주세요" {...props} />
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