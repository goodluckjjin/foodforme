import React, { Component } from 'react';
import "./style.scss";
import Login from '../Login';
import Join from '../Join';
import Main from '../Main';
import MainDetail from '../MainDetail';
import MyPage from '../MyPage';
import Search from '../Search';
import SNS_Write from '../SNS_Write';
import SNS_Edit from '../SNS_Edit';
import MyProfile_Edit from '../MyProfile_Edit';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {

    render() {
        return (
            <Router>
                <MainDetail />
                <Login />
                <Join />
                <MyPage />
                <Main />
                <Search />
                <SNS_Write />
                <SNS_Edit />
                <MyProfile_Edit />
            </Router>
        );
    }
}

export default App;