import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';
import Logo from '../Logo';
import Nav from '../Nav';
import SubNav from '../SubNav';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    state = {
        isBottomHeader: true
    }

    handleHeader = () => {
        const { pathname } = this.props.location;
        if (pathname === '/mypage') {
            this.setState({
                isBottomHeader: true
            })
        } else if (pathname === '/main') {
            this.setState({
                isBottomHeader: false
            })
        }
    }


    componentDidMount() {
        this.handleHeader();
    }

    render() {
        return (
            <header className="header">
                <div className="top_header">
                    <div className="container">
                        <NavLink className="link" to="/main"><Logo /></NavLink>
                        < Nav />
                    </div>
                </div>

                {this.props.isBottomHeader && (
                    <div className="bottom_header">
                        <div className="container">
                            <SubNav />
                        </div>
                    </div>
                )}
            </header>
        );
    }
}

export default withRouter(Header);