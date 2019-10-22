import React, { Component } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';


class Nav extends Component {


    render() {
        return (
            <nav className="nav">
                <NavLink className="link" to="/mypage">My page</NavLink>
                <NavLink className="link" to="/login">Logout</NavLink>
            </nav>
        );
    }
}

export default Nav;