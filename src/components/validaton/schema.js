import * as yup from "yup";

export const Schema = yup.object().shape({
    dateTime: yup.string().nullable().required("Date&Time is required"),
    tname: yup.string().max(25).required("Title is required").matches(/^[A-Za-z0-9 ]+$/,"Please Use Characters Only "),
    desname: yup.string().required("Details is required")
});



export const Schemasignup = yup.object().shape({

    custoname: yup.string().required("FirstName is required").matches(/^[A-Za-z0-9 ]+$/,"Please Use Characters Only "),


    email: yup.string().email().required("E-mail is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "This is not a valid email format!"),


    password: yup.string().required('Please Enter your password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

    confirmPassword: yup.string().required().oneOf([yup.ref("password"), null], "Passwords must match")



})


export const Schemasignin = yup.object().shape({

   
    email: yup.string().email().required("E-mail is required").matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "This is not a valid email format!"),


    password: yup.string().required('Please Enter your password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),





})