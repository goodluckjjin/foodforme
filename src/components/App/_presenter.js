import React from 'react';
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
import { BrowserRouter as Router} from 'react-router-dom';
//4. presenter에서 UI를 그린다.
//Fragment: 하나의 태그로 묶여야 하는데, div가 굳이 필요가 없어. 그럴 때 사용.
//5. router를 달아주기 위해서 페이지를 달 컴포넌트들을 전부 가지고 온다. 
//예 : '/about' '/main'  (일반 컴포넌트는 라우터를 따로 만들필요가 없기 때문에 가지고 오지 않는다.)

//path="/" => 4개의 컴포넌트가 불러들여지는거야 
const App = () => {
    return(
        <Router>
            <MainDetail/>
            <Login/>
            <Join/>
            <MyPage/>
            <Main/>
            <Search/>
            <SNS_Write/>
            <SNS_Edit/>
            <MyProfile_Edit/>
        </Router>
    );
}


export default App;
// 바꿔가면서 화면에서 확인하기 import는 필수겠죠?
    //    <Login/>


