import Yup from "./validate.js";

export const registerSchema = Yup.object().shape({
    email: Yup.string().email("Geçerli bir email giriniz").required("Email Zorunludur"),
    full_name: Yup.string().required("Ad Soyad Zorunludur"),
    username: Yup.string().email("Geçerli bir email veya kullanıcı adı giriniz").required("Email veya Kullanıcı Adı Zorunludur"),
    password: Yup.string().required("Şifre zorunludur"),
});