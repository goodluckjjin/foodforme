import React, {Component} from 'react';
import Login from "./presenter.js";
// import Logo from "../Feed/container.js";
// import Logo from "../Feed";
import {Route} from 'react-router-dom';


class Container extends Component{

    state={
        user_id: '',
        user_password: '',
    }

    handleChangeValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    render(){
        return(  
            <Route 
                exact path="/login" 
                render={()=> <Login 
                    {...this.state}
                    onChangeValue={this.handleChangeValue}
                    />} />
        );
    }
}

export default Container;

// state 초기 선언 해주기
// presenter.js에다 html 짜기
// scss 스타일 꾸미기
// 인사이드자바스크립트 5.1, 5.2 해오기
// <Login 
            // {...this.state} // 객체 복사해서 가져오기 
            // onChangeValue={this.handleChangeValue} // 함수 가져오는 방법
            // />