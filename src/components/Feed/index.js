import React, { Component } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

class Feed extends Component {

    render() {
        return (
            <NavLink className="feed_link" to="/main/detail">
                <div className="feed">
                    <div className="pic"></div>
                    <div className="cnt">
                        <span className="tit">역전할머니 맥주</span>
                        <div className="tagBox">#여기 존맛탱</div>
                    </div>
                </div>
            </NavLink>
        );
    }
}

export default Feed;