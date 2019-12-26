export const requiredField = value => value ? undefined: 'This field is required';

export const email = value => {
    const reg = new RegExp(/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);
    // const reg = new RegExp(['/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"',
    // '(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")',
    // '@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]',
    // '|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]',
    // '*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+))$/'].join(''));
    return value && !reg.test(value)
        ? 'Invalid email address'
        : undefined
};

export const phone = value => {
    return value && !/^[\+]{0,1}380([0-9]{9})$/.test(value) ? 'Invalid phone number' : undefined
};

export const maxLength = maxLength => value => {
    return value.length>maxLength ? `Must be ${maxLength} characters or less`: undefined
};

export const minLength = minLength => value => {
    return value.length<minLength ? `Must be ${minLength} characters or more`: undefined
};

export const weight = mb => photo => {
    return photo && photo.size/Math.pow(10,6) < mb ? undefined: `Photo size cannot be more than ${mb} MB`
};

export const validateImageFormat = typesImg => imageFile => {
    if (imageFile[0]) {
        const mimeType = typesImg;

        if (!mimeType.includes(imageFile[0].type)) {
            return `Image mime type must be ${mimeType}`;
        }
    }
};

export const sizes = (minWidth, minHeight) => image => {
    return image && (image.height > minHeight && image.width > minWidth) ?
        undefined :
        `Invalid image, min width: ${minWidth}, min height: ${minHeight}`;
};

export const requiredPhoto = (photo) => {
    return photo && Object.keys(photo).length !== 0 ? undefined: 'This field is required'
};

export const validators = {
    requiredField,
    requiredPhoto,
    weight,
    email,
    phone,
    maxLength,
    minLength,
    sizes,
    validateImageFormat
};
