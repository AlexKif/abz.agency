import React, {Component} from 'react';
import RegistrationTitle from "./RegistrationTitle/RegistrationTitle";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import {getAllUsers, getPosition} from "../../actions/usersAction";

import './style.scss'
import {connect} from "react-redux";
import {usersServices} from "../../services/usersServices";
import {numberOfUsers} from "../../helpers/renderUsers";

class Registration extends Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getPosition())
    }

    onSelectFile = (event) => {
        console.log(event.target.files[0]);
    };

    onSubmit = (data) => {
        usersServices.addUser(data).then(res => this.props.dispatch(getAllUsers(0, numberOfUsers())))
    };

    render() {
        return (
            <section className="registration">
                <div className="custom-container">
                    <RegistrationTitle/>
                    <RegistrationForm position={this.props.positions} onSelectFile={this.onSelectFile} onSubmit={this.onSubmit}/>
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