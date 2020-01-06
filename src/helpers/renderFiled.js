import React, {Fragment} from "react";
import {Field} from "redux-form";

export const renderField = ({input, legend, label, className, type, meta: { active, touched, error, warning }}) => {
    const fieldStatus = () => {
        if (touched && error) {
            return "registration-form__item-wrap field-err"
        } else if (active) {
            return "registration-form__item-wrap active-field"
        }
        return "registration-form__item-wrap"
    };

    return (
        <Fragment>
            <fieldset className={fieldStatus()}>
                <legend className="registration-form__item-name">{legend}</legend>
                <label htmlFor={input.name} className="d-none">{label}</label>
                <input {...input} type={type} className={className} placeholder={touched && error ? null: label} id={input.name} />
            </fieldset>
            {touched &&
            ((error && <p className="valid-error">{error}</p>) || (warning && <p>{warning}</p>))}
        </Fragment>
    )};

export const photoUpload = ({ input, type, meta, label, className }) => {
    delete input.value;
    const handleChange = (event, input) => {
        event.preventDefault();
        let imageFile = event.target.files[0];
        if (imageFile) {
            const localImageUrl = URL.createObjectURL(imageFile);
            const imageObject = new window.Image();

            imageObject.onload = () => {
                imageFile.width = imageObject.naturalWidth;
                imageFile.height = imageObject.naturalHeight;
                input.onChange(imageFile);
                URL.revokeObjectURL(imageFile);
            };
            imageObject.src = localImageUrl;
        }

    };
    return (
        <Fragment>
            <div className="upload-item-box">
                <label htmlFor="photo" className="label-text-filed">Upload your photo</label>
                <label htmlFor={input.name} className={`label-icon-${input.name}`}>{label}</label>
                <input
                    {...input}
                    name={input.name}
                    type={type}
                    onChange={event => handleChange(event, input)}
                    id={input.name}
                    className={className}
                />
            </div>

            {(meta.touched && !meta.active && meta.error) && (
                <span className="valid-error image-error">{meta.error}</span>
            )}
        </Fragment>
    );
};

export const renderDropDown = ({input, name, className, positions}) => {
    return (
        <select {...input} name={name} className={className}>
            {positions && positions.map((item, index) => (
                <option key={index} value={item.id}>{item.name}</option>
            ))}
        </select>
    );
};

