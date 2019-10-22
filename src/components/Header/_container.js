import React, { Component } from 'react';
import Header from './_presenter';
import { withRouter } from 'react-router-dom';


// 1. router (page)별로 보이고, 안보이고를 하게할거야 
// 2. pathname
// react-router-dom 안에 있는 props 
// props.location.pathname
// Route (x)
class container extends Component{
    state={
        isBottomHeader: true
    }

    //1. this.props.location.pathname 이 mypage => isBottomHeader: true
    //2. this.props.location.pathname 이 main => isBottomHeader: false

    handleHeader = () => {
        const { pathname } =this.props.location;
        if(pathname === '/mypage') {
            this.setState({
                isBottomHeader: true
            })
        } else if (pathname === '/main') {
            this.setState({
                isBottomHeader: false
            })
        }
    }

    //첫렌더링
    componentDidMount(){
        this.handleHeader();
    }

    render(){
        return(
            <Header {...this.state}/>
        );
    }
}

export default withRouter(container);