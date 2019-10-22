import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './style.scss';
import Modal from '../Modal';
import Button from '../Button';


class MyProfileEdit extends Component {

    render() {
        return (
            <Route
                path="/mypage/myprofile_edit"
                render={() => <MyProfileEditUI />}
            />
        );
    }
}


const MyProfileEditUI = (props) => {

    return (
        <div className="MyProfile_Edit_wrapper">
            <Modal />
            <div className="content">
                <div className="l_content">
                    <div className="my_profile_box">
                        <div className="my_profile">
                            <div className="my_pic">
                                <img />
                            </div>
                            <div className="my_info">
                                <span className="my_id">sooooo.an</span>
                                <span className="edit_pic">프로필 사진 바꾸기</span>
                            </div>
                        </div>
                    </div>
                    <div className="detail_info">
                        <label>
                            <span>이름</span>
                            <input type="text" placeholder="Soo Kyung An" />
                        </label>
                        <label>
                            <span>사용자 이름</span>
                            <input type="text" placeholder="sooooo" />
                        </label>
                        <label>
                            <span>웹사이트</span>
                            <input type="text" placeholder="" />
                        </label>
                        <label>
                            <span>소개</span>
                            <input type="text" placeholder="SooKyungAn" />
                        </label>
                    </div>
                    <div className="personal_info">
                        <span className="personal_tit">개인 정보</span>
                        <label>
                            <span>이메일</span>
                            <input type="text" placeholder="assd3327@gmail.com" />
                        </label>
                        <label>
                            <span>전화번호</span>
                            <input type="text" placeholder="+82 10-0000-0000" />
                        </label>
                        <label>
                            <span>성별</span>
                            <input type="text" placeholder="여" />
                        </label>
                        <label>
                            <span>비슷한 계정 추천</span>
                            <span className="checkbox">
                                <input type="checkbox" />
                                <span>팔로우할 만한 비슷한 계정을 추천할 때 회원님의 계정을 포함합니다.<a href="">[?]</a></span>
                            </span>
                        </label>
                    </div>
                    <div className="btn">
                        <Button />
                    </div>
                </div>
                <div className="r_content">
                    <div className="my_profile">
                        <div className="my_pic">
                            <img />
                        </div>
                        <div className="my_info">
                            <span className="my_id">sooooo.an</span>
                        </div>
                    </div>
                    <div className="pw_change">
                        <label>이전 비밀번호<input type="password" /></label>
                        <label>새 비밀번호<input type="password" /></label>
                        <label>새 비밀번호 확인<input type="password" /></label>
                    </div>
                    <div className="btn">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyProfileEdit;