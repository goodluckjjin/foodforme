import React from 'react';
import './style.scss';

const SubNav = (props) => {
    return (
        <div className="sub_nav">
            <ul className="menu_list">
                <li className="menu">
                    <a href="">My Feed</a>
                </li>
                <li className="menu">
                    <a href="">내정보관리</a>
                </li>
            </ul>
        </div>
    );
}

export default SubNav;
