import * as yup from "yup";

const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const formSchema = yup
    .object({
        firstName: yup.string().required("Por favor ingrese al menos un nombre"),
        lastName: yup.string().required("Por favor ingrese sus apellidos"),
        email: yup
            .string()
            .email("Por favor ingrese un email valido")
            .required("Por favor ingrese un email valido"),
        phoneNumber: yup
            .string()
            .matches(phoneRegExp, "Por favor ingrese un numero de teléfono válido")
            .min(8, "Por favor ingrese un numero de teléfono válido"),
        city: yup.string().required("Por favor ingrese una ciudad"),
        address: yup.string().required("Por favor ingrese una dirección válida"),
        agreePolicy: yup
            .bool()
            .oneOf([true], "Necesita aceptar nuestras políticas"),
    })
    .required();

export default formSchema;
