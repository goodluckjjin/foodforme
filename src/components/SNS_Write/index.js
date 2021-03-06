import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './style.scss';
import Modal from '../Modal';
import Button from '../Button';

class SNSWrite extends Component {

    render() {
        return (
            <Route
                path="/mypage/sns_write"
                render={() => <SNSWriteUI />}
            />
        );
    }
}


const SNSWriteUI = (props) => {

    return (
        <div className="SNS_Write_wrapper">
            <Modal />
            <div className="content">
                <div className="l_content">
                    <div className="pic"></div>
                </div>
                <div className="r_content">
                    <div className="write_box">
                        <div className="tit">
                            <input type="text" />
                        </div>
                        <div className="desc">
                            <input type="text" />
                        </div>
                    </div>
                    <Button />
                </div>
            </div>
        </div>

    )

}

export default SNSWrite;