import React,{Component} from 'react';
import Modal from "./presenter.js";


class Container extends Component{
    // state = {
    //     isMypageModal: false,
    // }


    // handleCloseBtn = () => {
    //     const { pathname } = this.props.location;
    //     if(pathname === '/mypage/myprofile_edit') {
    //         this.setState({
    //             isMypageModal: true
    //         })
    //     } else if (pathname === '/main/detail') {
    //         this.setState({
    //             isMypageModal: false
    //         })
    //     }
    // }

    // componentDidMount(){
    //     this.handleCloseBtn();
    // }


    render(){
        return(    
            <Modal {...this.state}/>
        );
    }
}

export default Container;