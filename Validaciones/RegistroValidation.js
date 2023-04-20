import * as yup from 'yup';

export const registroValidationSchena = yup.object().shape({
    email: yup
    .string()
    .email('coloque un email valido')
    .required(' '),
    password: yup
    .string()
    .required(' ')
})