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
        return (
            <header className="header container-fluid">
                <h1 className="logo"><Link to="/"><img src="./images/logo.svg" alt="abz" className="logo__abz"/></Link></h1>
                {this.state.menuOpen ? (
                <menu className="main-menu">
                    <div className="authorized-user">
                        <div className="user-photo">
                            <img src="./images/user-superstar-2x.jpg" alt="user-avatar" className="user-photo__avatar"/>
                        </div>
                        <p className="user-name">Superstar</p>
                        <p className="user-email">Superstar@gmail.com</p>
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
                ) : null
                }
                <button type="button" className="main-menu-btn" onClick={this.handleClick}><img src="./images/line-menu.svg" alt="menu"/></button>
            </header>
        );
    }
}

export default Header;