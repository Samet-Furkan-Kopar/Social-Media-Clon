import Yup from "./validate.js";

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Geçerli bir email giriniz").required("Email zorunludur"),
    password: Yup.string().required("Şifre zorunludur"),
});