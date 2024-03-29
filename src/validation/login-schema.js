import Yup from "./validate.js";

export const loginSchema = Yup.object().shape({
    username: Yup.string().email("Geçerli bir email veya kullanıcı adı giriniz").required("Email veya Kullanıcı Adı Zorunludur"),
    password: Yup.string().required("Şifre zorunludur"),
});