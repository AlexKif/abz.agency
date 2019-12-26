import React, {Fragment} from "react";

export const renderField = ({input, label, className, type, meta: { touched, error, warning }}) => (
    <Fragment>
        <label htmlFor={input.name} className="d-none">{label}</label>
        <input {...input} type={type} className={className} placeholder={label} id={input.name}/>
        {touched &&
        ((error && <p className="valid-error">{error}</p>) || (warning && <p>{warning}</p>))}
    </Fragment>
);

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
                <span className="upload-item__info">{meta.error}</span>
            )}
        </Fragment>
    );
};

