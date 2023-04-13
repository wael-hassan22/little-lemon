import * as Yup from 'yup';

export const basicSchema = Yup.object().shape({
    name : Yup.string("enter a string").required("Required"),
    email : Yup.string().email("please enter a valid email").required("Enter Valid Email Address"),
    phone : Yup.number("please enter number").required("Required"),
    date : Yup.string().required("Choose a Date & Time"),
    guest : Yup.number().required("Enter number of guests")
})