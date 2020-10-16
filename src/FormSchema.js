import * as yup from "yup"

export default yup.object().shape({
    name: yup
        .string()
        .required("Must provide name")
        .min(2, "Name must be more than 2 characters"),
    size: yup
        .string()
        .required("Must select size"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),
    ham: yup.boolean(),
    special: yup.string(),
})