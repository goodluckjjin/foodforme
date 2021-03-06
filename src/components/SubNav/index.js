import React, { Component } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';


class SubNav extends Component {

    render() {
        return (
            <div className="sub_nav">
                <ul className="menu_list">
                    <li className="menu">
                        <NavLink className="link" to="/search" activeClassName="active">My Feed</NavLink>
                    </li>
                    <li className="menu">
                        <NavLink className="link" to="mypage" activeClassName="active">내정보관리</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SubNav;