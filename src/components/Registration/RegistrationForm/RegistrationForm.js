import React, {Fragment} from 'react';
import {Field, reduxForm} from "redux-form";
import {photoUpload, renderDropDown, renderField} from "../../../helpers/renderFiled";
import {validators} from "../../../helpers/validators/validators";

import './style.scss'
import {Col, Row} from "reactstrap";
import SelectField from "./SelectField/SelectField";

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
                <Row>
                    <div className="col-md-4">
                        <div className="registration-form__item">
                            <Field name="name"
                                   component={renderField}
                                   type="text"
                                   legend="Name"
                                   label="Your name"
                                   className="registration-form__item-field"
                                   validate={[validators.requiredField, minLength2, maxLength60]}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="registration-form__item">
                            <Field label={"Your email"}
                                   name={"email"}
                                   type={"email"}
                                   legend="Email"
                                   component={renderField}
                                   className="registration-form__item-field"
                                   validate={[validators.requiredField, validators.email]}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="registration-form__item">
                            <Field component={renderField}
                                   name={"phone"}
                                   type={"phone"}
                                   legend="Phone"
                                   label={"+38 (___) ___ __ __"}
                                   className="registration-form__item-field"
                                   validate={[validators.requiredField, validators.phone]}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/*<div className="registration-form__item select-item">*/}
                        {/*    <Field component={renderDropDown}*/}
                        {/*           name={"position"}*/}
                        {/*           className="registration-form__item-field-select"*/}
                        {/*           required*/}
                        {/*           positions={positions}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<span className="registration-form__item-custom-appearance">*/}
                        {/*    <img src="/images/caret-down.svg" alt="custom-appearance"/>*/}
                        {/*</span>*/}
                        <SelectField positions={positions}/>
                    </div>
                    <div className="col-md-6">
                        <div className="registration-form__item upload-item">
                            <Field component={photoUpload}
                                   type={"file"}
                                   name="photo"
                                   label={<Fragment>
                                       <img src="/images/upload.svg" alt="upload-icon"/>
                                       <span>Upload</span>
                                   </Fragment>}
                                   className="upload-item-box__field"
                                   validate={[validators.requiredPhoto, types, sizes, weight5mb]}
                            />
                            <p className="upload-item__info">File format jpg up to 5 MB, the minimum size of 70x70px</p>
                        </div>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    <Col md={5} lg={4} xl={3} className="submit-registration-wrapper">
                        <button type={"submit"} className="submit-registration">Sign Up</button>
                    </Col>
                </Row>
            </form>
        </div>
    );
}
export default reduxForm({form: 'registration'})(RegistrationForm);
