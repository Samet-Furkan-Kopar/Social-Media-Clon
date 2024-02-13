/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Button from "../../components/Button";
import Seperator from "../../components/Separator";
// import { useDispatch } from "react-redux";
// import {userActions} from "../store/user/userSlice"
import { useSelector } from "react-redux";
// import { LoginSchema } from "../validation/index";
import { login } from "../../firebase.js";
import * as yup from "yup";
import classNames from "classnames";
import Loader from "../../components/Loader";
import { Helmet } from "react-helmet";
const Login = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const location = useLocation();
    const ref = useRef();
    const user = useSelector((state) => state.auth.user);
    // const schema = yup.object({
    //     username: yup.string().required("Email Formatı Uygun Değil"),
    //     password: yup.string().required("Şifre gerekli*"),
    // });
    useEffect(() => {
        if (user?.data !== null && user !== null) {
            navigate("/inbox", { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
        let images = ref.current.querySelectorAll("img"),
            total = images.length,
            current = 0;
        const imageSlider = () => {
            images.forEach((image, index) => {
                if (index === current) {
                    image.classList.remove("opacity-0");
                } else {
                    image.classList.add("opacity-0");
                }
            });
            current = (current + 1) % total;
        };
        imageSlider(); // İlk sefer için çalıştır

        let interval = setInterval(imageSlider, 3000);

        return () => clearInterval(interval);
    }, [ref]);

    const submitHandle = async (values) => {
        

        const response = await login(values?.username, values?.password);
        if (response) {
            setTimeout(() => {
                navigate(`/inbox`, { replace: true });
            }, 2000);
        }
    };

    const images = ["screenshot1.png", "screenshot2.png", "screenshot3.png", "screenshot4.png"];
    return (
        <div className="w-full h-full flex items-center gap-x-8  justify-center ">
            <Helmet>
                <title>Log In • Instagram</title>
            </Helmet>
            <div
                className="hidden md:block w-[380px] h-[581px] relative bg-logo-pattern "
                style={{ backgroundSize: "468.32px 634.15px", backgroundPosition: "-46px 0px" }}
            >
                <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className={classNames({
                                "h-full w-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear": true,
                                "opacity-100": index === 0,
                            })}
                            src={`/images/${image}`}
                            alt={`Instagram screenshot ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="w-[350px] grid gap-y-3">
                <div className=" bg-white border p-[40px] pt-8 pb-6">
                    <a className="flex justify-center mb-8" href="">
                        <img className="h-[51px]" src="/images/instagramlogin.png" />
                    </a>
                    <Formik
                        initialValues={{ username: "", password: "" }}
                        onSubmit={submitHandle}
                        // validationSchema={schema}
                    >
                        {({ isSubmitting, values, isValid, dirty }) => (
                            <Form className="grid gap-y-1.5">
                                <Input
                                    required={true}
                                    type="text"
                                    label={"Username or email"}
                                    show={true}
                                    name="username"
                                />
                                <Input
                                    required={true}
                                    type="password"
                                    show={false}
                                    label={" Password"}
                                    name="password"
                                />

                                {/* <button
                                    //  disabled={values?.username === "" || values?.password === "" ? true : false}
                                    disabled={isSubmitting || !isValid || !dirty}
                                    type="submit"
                                    // className="h-[30px] rounded bg-brand mt-1 font-semibold text-white text-sm disabled-opacity-50"
                                    className={classNames({
                                        "h-[30px] rounded bg-brand mt-1 font-semibold text-white text-sm disabled-opacity-50 ": true,
                                        "disabled": isSubmitting, //field.value yani değer varsa yukarı çıkar
                                    })}
                               >
                                    Log In
                                </button> */}
                                <Button disabled={isSubmitting || !isValid || !dirty} type="submit">
                                    Log In
                                </Button>
                                <Seperator label="OR" />
                                <a
                                    href="#"
                                    className="flex items-center mb-2 justify-center gap-x-2 h-[30px] rounded text-facebook text-sm"
                                >
                                    <FaFacebookSquare size={20} />
                                    Log in with Facebook
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center justify-center text-link text-xs"
                                >
                                    Forgot Password?
                                </a>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className=" bg-white border p-4 text-sm text-center">
                    Do not have an account?{" "}
                    <Link to={"/auth/register"} className="font-semibold text-brand">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
