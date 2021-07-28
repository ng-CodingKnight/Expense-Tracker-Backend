import { object, string, ref } from "yup";

export const createUserSchema = object({
    body: object({
        name: string().required('Name is required'),
        password: string()
            .required('Password is required')
            .min(6, 'too short'),
        passwordConfirmation: string().oneOf(
            [ref('password'), null],
            "Password must match"
        ),
        email: string()
            .email('must be an email')
            .required('email is required')

    })
});

export const userSessionSchema = object({
    body: object({
        password: string()
            .required('Password is required')
            .min(6, 'too short'),
        email: string()
            .email('must be an email')
            .required('email is required')
    })
})