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
        <div className="registration-form">
            <form onSubmit={props.handleSubmit(props.onSubmit.bind(this))}>
                <div className="registration-form__item">
                    <fieldset className="registration-form__item-wrap">
                        <legend className="registration-form__item-name">Name</legend>
                        <Field name="name"
                               component={renderField}
                               type="text"
                               label="Your name"
                               className="registration-form__item-field"
                               validate={[validators.requiredField, minLength2, maxLength60]}/>
                    </fieldset>
                </div>
                <div className="registration-form__item">
                    <fieldset className="registration-form__item-wrap">
                        <legend className="registration-form__item-name">Email</legend>
                        <Field label={"Your email"}
                               name={"email"}
                               type={"email"}
                               component={renderField}
                               className="registration-form__item-field"
                               validate={[validators.requiredField, validators.email]}/>
                    </fieldset>
                </div>
                <div className="registration-form__item">
                    <fieldset className="registration-form__item-wrap">
                        <legend className="registration-form__item-name">Phone</legend>
                        <Field component={renderField}
                               name={"phone"}
                               type={"phone"}
                               label={"+38 (___) ___ __ __"}
                               className="registration-form__item-field"
                               validate={[validators.requiredField, validators.phone]}/>
                    </fieldset>
                </div>
                <div className="registration-form__item select-item">
                    <Field component={"select"}
                           name={"position"}
                           className="registration-form__item-field-select"
                           validate={[validators.requiredField]}
                           required>
                        <option value=""
                                disabled
                                hidden>Select your position</option>
                        {positions && positions.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                        ))}
                    </Field>
                    <span className="registration-form__item-custom-appearance">
                        <img src="/images/caret-down.svg" alt="custom-appearance"/>
                    </span>
                </div>
                <div className="registration-form__item upload-item">
                    <div className="upload-item-box">
                        <label htmlFor="photo" className="label-text-filed">Upload your photo</label>
                        <Field component={photoUpload}
                               type={"file"}
                               name="photo"
                               label={<img src="/images/upload.svg" alt="upload-icon"/>}
                               className="upload-item-box__field"
                               validate={[validators.requiredPhoto, types, sizes, weight5mb]}
                        />
                    </div>
                    <p className="upload-item__info">File format jpg  up to 5 MB, the minimum size of 70x70px</p>
                </div>
                <button type={"submit"} className="submit-registration">Sign Up</button>
            </form>
        </div>
    );
}
export default reduxForm({form: 'registration'})(RegistrationForm);
