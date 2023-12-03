import * as yup from 'yup';

const userSchema = yup
.object()
.shape({
    name: yup
        .string()
        .matches(/^[A-Z]/,"First letter of the name shoud be uppercase")
        .required("Name is a required field"),
    age: yup
        .number()
        .positive("Age must be greater than zero")
        .required("Age is a required field"),
    email: yup
        .string()
        .email("Email should be like xxx@xxx.xxx")
        .required("Email is a required field"),
    password: yup
        .string()
        .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,"Password must have: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character")
        .required("Passwrod is a required field"),
    passwordrepeat: yup
        .string()
        .matches(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,"Password must have: 1 number, 1 uppercased letter, 1 lowercased letter, 1 special character")
        .required("Repeat password is a required field"),
    female: yup
        .string(),
    male: yup
        .string(),
    accept: yup
        .boolean(),
    country: yup
        .string()
        .required("Country is a required field"),
})

export default userSchema;