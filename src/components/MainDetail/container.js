import  React, {Component} from 'react';
import MainDetail from "./presenter.js";
//6. Route를 단다.
import { Route } from 'react-router-dom';
//7. Route의 역할: 페이지를 만든다. 
//8. Route 안에 있는 attribute(내가 설정할 수 있는 속성), path의 역할은? 라우터이름 
//9. render는? 컴포넌트 사용 render or component (차이점 좀있다 보여줌) 여기서는 render사용
//기본 path="/" 

// 부모(X) => 자식  exact
// / => /detail 


class Container extends Component{
    // state={
    //     closeBtn: false; modal에 있는 btn태그를 어떻게 가져오지?
    // }

    // handleModal = () => {
    //     const 
    // }

    render(){
        return(    
            <Route
                path="/main/detail"
                render={() => <MainDetail/>}
            />
        );
    }
}

export default Container;