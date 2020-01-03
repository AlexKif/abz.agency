import React, {Fragment} from "react";

export const renderField = ({input, legend, label, className, type, meta: { active, touched, error, warning }}) => {
    // const field = document.getElementsByClassName(className)[0];
    // const parent = field.parentElement;
    // console.log(field);
    // for (let key in field) {
    //     switch () {
    //
    //     }
    //     console.log(key, field[key]);
    // }
    // console.log(field);
    // if (active) {
    //     const fieldName = input.name;
    //     const parent = field.parentNode;
    //     console.log('active', fieldName);
    // }
    const fieldSet = document.querySelector('.registration-form__item-wrap');
    const legendCust = document.querySelector('.registration-form__item-name');
    if (active) {
        fieldSet.style.borderColor = 'red';
        legendCust.style.color = 'red'

    } else if (!active) {
        console.log(fieldSet);
        // fieldSet.style.borderColor = 'black';
        // legendCust.style.color = 'black'
    }

    return (
        <Fragment>
            <fieldset className="registration-form__item-wrap">
                <legend className="registration-form__item-name">{legend}</legend>
                <label htmlFor={input.name} className="d-none">{label}</label>
                <input {...input} type={type} className={className} placeholder={label} id={input.name} />
            </fieldset>
            {touched &&
            ((error && <p className="valid-error">{error}</p>) || (warning && <p>{warning}</p>))}
        </Fragment>
    )};

export const photoUpload = ({ input, type, meta, label, className }) => {
    delete input.value;
    console.log(meta);
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
                <span className="upload-item__info">{meta.error}</span>
            )}
        </Fragment>
    );
};

