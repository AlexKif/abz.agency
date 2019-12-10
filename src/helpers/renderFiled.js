import React from "react";

export const renderField = ({input, label, type, meta: { touched, error, warning }}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

export const photoUpload = ({ input, type, meta: { touched, error, warning } }) => {
    delete input.value;

    return (
        <div>
            <label htmlFor={input.name}>qqq</label>
            <input {...input} type={type} id={input.name}/>
        </div>
    )
};