import React, {Component} from 'react';

import './style.scss'
import {Field, reduxForm} from "redux-form";
import {email, maxLength, minLength, requiredField} from "../../../helpers/validators/validators";
import {photoUpload, renderField} from "../../../helpers/renderFiled";

const maxLength60 = maxLength(60);
const minLength2 = minLength(2);

function RegistrationForm(props) {
    const {positions} = props.position;
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="">
                <fieldset>
                    <legend>Name</legend>
                    <Field placeholder={"Your name"}
                           name={"name"}
                           component={renderField}
                           type={"text"}
                           validate={[requiredField, minLength2, maxLength60]}/>
                </fieldset>
            </div>
            <div className="">
                <fieldset>
                    <legend>Email</legend>
                    <Field placeholder={"Your email"}
                           name={"email"}
                           type={"email"}
                           component={renderField}
                           validate={[requiredField, email]}/>
                </fieldset>
            </div>
            <div className="">
                <fieldset>
                    <legend>Phone</legend>
                    <Field component={"input"} name={"phone"} placeholder={"Your phone"} />
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

export default reduxForm({form: 'registration'})(RegistrationForm);
