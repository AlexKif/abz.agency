import React, {Component} from 'react';
import RegistrationTitle from "./RegistrationTitle/RegistrationTitle";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import {getPosition, updateUsers} from "../../actions/usersAction";
import { reset } from "redux-form";
import './style.scss'
import {connect} from "react-redux";
import {usersServices} from "../../services/usersServices";
import {numberOfUsers} from "../../helpers/renderUsers";

class Registration extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getPosition())
    }

    onSubmit = (data) => {
        // console.log(data);
        usersServices.addUser(data).then(_ => this.props.dispatch(updateUsers(1, numberOfUsers())));
        this.props.dispatch(reset("registration"));
    };

    render() {
        return (
            <section className="registration">
                <div className="custom-container">
                    <RegistrationTitle/>
                    <RegistrationForm position={this.props.positions} onSubmit={this.onSubmit}/>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({usersReducer}) => {
    return {
        positions: usersReducer.positions
    }
};


export default connect(mapStateToProps)(Registration);