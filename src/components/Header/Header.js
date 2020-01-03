import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './style.scss'
import {getUser} from "../../actions/usersAction";
import {connect} from "react-redux";
import * as ReactDOM from "react-dom";

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

    componentDidMount() {
        this.props.dispatch(getUser(1))
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }

    handleClickOutside = (event) => {
        const domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                menuOpen : false
            });
        }
    };


    render() {
        const {menuOpen} = this.state;
        return (
            <header className="header">
                <div className="custom-container header-wrap">
                    <h1 className="logo"><Link to="/" className="d-block"><img src="./images/logo.svg" alt="abz" className="logo__abz"/></Link></h1>
                    <div className={menuOpen ? "main-menu": "main-menu menu-hidden"}>
                        {this.props.user ? (
                        <div className="authorized-user">
                            <div className="user-photo">
                                <img src={this.props.user.user.photo} alt="user-avatar" className="user-photo__avatar"/>
                            </div>
                            <div className="user-data">
                                <p className="user-name">{this.props.user.user.name}</p>
                                <p className="user-email">{this.props.user.user.email}</p>
                            </div>
                            <button type="button" className="sign-out-btn"><img src="./images/sign-out.svg" alt="sign-out"/></button>
                        </div>
                        ): undefined}
                        <nav className="navigation">
                            <Link to="/about-me" className="navigation__item">About me</Link>
                            <Link to="/relationships" className="navigation__item">Relationships</Link>
                            <Link to="/requirements" className="navigation__item">Requirements</Link>
                            <Link to="/users" className="navigation__item">Users</Link>
                            <Link to="/sign-up" className="navigation__item">Sign Up</Link>
                            <Link to="/sign-out" className="navigation__item">Sign Out</Link>
                        </nav>
                    </div>
                    <button type="button" className="main-menu-btn" onClick={this.handleClick}><img src="./images/line-menu.svg" alt="menu"/></button>
                </div>
                <div className="wrapper">
                </div>
            </header>
        );
    }
}

function mapStateToProps ({usersReducer}) {
    return {
        user: usersReducer.user
    }
}

export default connect(mapStateToProps)(Header);