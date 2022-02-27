const required = (value) => {
    return value.replace(/ /g, '').length > 2 ? true : false
}

const Validating = ({ value, rule }) => {
    switch (rule) {
        case 'required':
            if (required(value)) {
                return {
                    err: false,
                    message: ''
                }
            } else {
                return {
                    err: true,
                    message: 'این فیلد الزامی میباشد'
                }
            }

        default:
            break;
    }
}

export { Validating }