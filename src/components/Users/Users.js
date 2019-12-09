import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllUsers} from "../../actions/usersAction";
import User from "./User/User";
import UsersTitle from "./UsersTitle/UsersTitle";

import './style.scss'
import {numberOfUsers} from "../../helpers/renderUsers";


class Users extends Component {

    state = {
        pagination: 2,
    };

    componentDidMount() {
        this.getUsers(1, numberOfUsers());
    }

    getUsers = (page, count) => {
        const {dispatch} = this.props;
        dispatch(getAllUsers(page,count));
    };

    showMoreUsers = () => {
        let pagination = this.state.pagination;
        pagination++;
        this.setState({pagination: pagination});
        this.getUsers(this.state.pagination, numberOfUsers())
    };

    render() {
        return (
            <section className="users">
                <div className="custom-container">
                    <UsersTitle/>
                    <User showMoreUsers={this.showMoreUsers} users={this.props.usersReducer} totalUsers={this.props.totalUsers}/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        usersReducer: usersReducer.users,
        totalUsers: usersReducer.totalUsers
    };
};

export default connect(mapStateToProps)(Users);