import * as yup from 'yup';

export const registroValidationSchena = yup.object().shape({
    refid: yup
    .string()
    .required('Ingrese su refid'),
    email: yup
    .string()
    .email('coloque un email valido')
    .required(' '),
    password: yup
    .string()
    .required(' ')
})