import React from 'react';
import './style.scss';

const Header = (props) => {
    return( 
        <header className="header">
            <div className="top_header">
                <div className="container">
                    <h1 className="logo"></h1>
                    <nav className="nav">
                        <a href="">My page</a>
                        <a href="">Logout</a>
                    </nav>
                </div>
            </div>

            {props.isBottomHeader && (
                <div className="bottom_header">
                <div className="container">
                    <div className="sub_nav">
                        <ul className="menu_list">
                            <li className="menu">
                                <a href="">My Feed</a>
                            </li>
                            <li className="menu">
                                <a href="">myFeed</a>
                            </li>
                            <li className="menu">
                                <a href="">내정보관리</a>
                            </li>
                        </ul>
                 </div>
              </div>
            </div>
            )}
            
        
    </header>
    );
}

export default Header;

/*
<header className="header">
    
<div className="container">
    <h1 className="logo"></h1>
    <nav className="nav">
        <a href="">My page</a>
        <a href="">Logout</a>
    </nav>
</div>
</header>
<div className="sub_nav">
<div className="container">
    <ul className="menu_list">
        <li className="menu">
            <a href="">My Feed</a>
        </li>
        <li className="menu">
            <a href="">myFeed</a>
        </li>
        <li className="menu">
            <a href="">내정보관리</a>
        </li>
    </ul>
</div>
</div>
*/