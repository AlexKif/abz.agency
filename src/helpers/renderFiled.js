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

export const photoUpload = ({ input, type, meta }) => {
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
        <div>
            <input
                {...input}
                name={input.name}
                type={type}
                onChange={event => handleChange(event, input)}
            />
            {(meta.touched && !meta.active && meta.error) && (
                <span>{meta.error}</span>
            )}
        </div>
    );
};

