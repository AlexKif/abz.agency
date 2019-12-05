import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllUsers} from "../../actions/usersAction";
import User from "./User/User";
import UsersTitle from "./UsersTitle/UsersTitle";

import './style.scss'


class Users extends Component {

    componentDidMount() {
        if (window.innerWidth <= 767) {
            this.getUsers(1,3)
        } else {
            this.getUsers(1,6)
        }
    }


    getUsers = (page, count) => {
        const {dispatch} = this.props;
        dispatch(getAllUsers(page,count))
    };

    showMoreUsers = () => {
        this.getUsers(1,7)
    };

    render() {
        return (
            <section className="users">
                <div className="custom-container">
                    <UsersTitle/>
                    <User showMoreUsers={this.showMoreUsers} users={this.props.usersReducer}/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        usersReducer:usersReducer.users
    };
};

export default connect(mapStateToProps)(Users);