import React, {Component} from 'react';

import './style.scss'
import {Field, reduxForm} from "redux-form";

class RegistrationForm extends Component {

    render() {
        const {positions} = this.props.position;
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="">
                    <fieldset>
                        <legend>Name</legend>
                        <Field placeholder={"Your name"} name={"name"} component={"input"} type={"text"}/>
                    </fieldset>
                </div>
                <div className="">
                    <fieldset>
                        <legend>Email</legend>
                        <Field placeholder={"Your email"} name={"email"} type={"email"} component={"input"}/>
                    </fieldset>
                </div>
                <div className="">
                    <fieldset>
                        <legend>Phone</legend>
                        <Field component={"input"} name={"phone"} placeholder={"Your phone"}/>
                    </fieldset>
                </div>
                <div className="">
                    <Field component={"select"} name={"position"}>
                        <option value="DEFAULT" disabled>Select your position</option>
                        {positions && positions.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                        ))}
                    </Field>
                </div>
                <div className="">
                    <span>Upload your photo</span>
                    <Field component={photoUpload} type={"file"} name="photo"/>
                </div>
                <button type={"submit"}>Sign Up</button>
            </form>
        );
    }
}

const photoUpload = ({ input, type, meta: { touched, error, warning } }) => {
    delete input.value;

    return (
        <div>
            <label htmlFor={input.name}>qqq</label>
            <input {...input} type={type} id={input.name}/>
        </div>
    )
};

export default reduxForm({form: 'registration'})(RegistrationForm);
