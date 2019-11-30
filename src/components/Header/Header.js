import React, {Component} from 'react';
import {Link} from "react-router-dom";

import './style.scss'

class Header extends Component {
    state = {
      menuOpen: false
    };

    handleClick = () => {
        if (this.state.menuOpen) {
            this.setState({menuOpen: false})
        } else {
            this.setState({menuOpen: true})
        }
    };
    render() {
        const {menuOpen} = this.state;
        return (
            <header className="header">
                <div className="custom-container header-wrap">
                    <h1 className="logo"><Link to="/" className="d-block"><img src="./images/logo.svg" alt="abz" className="logo__abz"/></Link></h1>
                    <menu className={menuOpen ? "main-menu": "main-menu menu-hidden"}>
                        <div className="authorized-user">
                            <div className="user-photo">
                                <img src="./images/user-superstar-2x.jpg" alt="user-avatar" className="user-photo__avatar"/>
                            </div>
                            <div className="user-data">
                                <p className="user-name">Superstar</p>
                                <p className="user-email">Superstar@gmail.com</p>
                            </div>
                            <button type="button" className="sign-out-btn"><img src="./images/sign-out.svg" alt="sign-out"/></button>
                        </div>
                        <nav className="navigation">
                            <Link to="/about-me" className="navigation__item">About me</Link>
                            <Link to="/relationships" className="navigation__item">Relationships</Link>
                            <Link to="/requirements" className="navigation__item">Requirements</Link>
                            <Link to="/users" className="navigation__item">Users</Link>
                            <Link to="/sign-up" className="navigation__item">Sign Up</Link>
                            <Link to="/sign-out" className="navigation__item">Sign Out</Link>
                        </nav>
                    </menu>
                    <button type="button" className="main-menu-btn" onClick={this.handleClick}><img src="./images/line-menu.svg" alt="menu"/></button>
                </div>
            </header>
        );
    }
}

export default Header;