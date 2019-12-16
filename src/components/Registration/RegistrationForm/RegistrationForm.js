import React from 'react';
import {Field, reduxForm} from "redux-form";
import {photoUpload, renderField} from "../../../helpers/renderFiled";
import {validators} from "../../../helpers/validators/validators";

import './style.scss'

const maxLength60 = validators.maxLength(60);
const minLength2 = validators.minLength(2);
const weight5mb = validators.weight(5);
const sizes = validators.sizes(70,70);
const types = validators.validateImageFormat("image/jpeg, image/jpg");

function RegistrationForm(props) {

    const {positions} = props.position;

    return (
        <form onSubmit={props.handleSubmit(props.onSubmit.bind(this))}>
            <div className="">
                <fieldset>
                    <legend>Name</legend>
                    <Field placeholder={"Your name"}
                           name={"name"}
                           component={renderField}
                           type={"text"}
                           validate={[validators.requiredField, minLength2, maxLength60]}/>
                </fieldset>
            </div>
            <div className="">
                <fieldset>
                    <legend>Email</legend>
                    <Field placeholder={"Your email"}
                           name={"email"}
                           type={"email"}
                           component={renderField}
                           validate={[validators.requiredField, validators.email]}/>
                </fieldset>
            </div>
            <div className="">
                <fieldset>
                    <legend>Phone</legend>
                    <Field component={renderField}
                           name={"phone"} placeholder={"Your phone"}
                           validate={[validators.requiredField, validators.phone]}/>
                </fieldset>
            </div>
            <div className="">
                <Field component={"select"} name={"position"} validate={[validators.requiredField]} required>
                    <option value="" disabled hidden>Select your position</option>
                    {positions && positions.map((item, index) => (
                        <option key={index} value={item.id}>{item.name}</option>
                    ))}
                </Field>
            </div>
            <div className="">
                <span>Upload your photo</span>
                <Field component={photoUpload}
                       type={"file"}
                       name="photo"
                       validate={[validators.requiredPhoto, types, sizes, weight5mb]}
                />
            </div>
            <button type={"submit"}>Sign Up</button>
        </form>
    );
}
export default reduxForm({form: 'registration'})(RegistrationForm);
