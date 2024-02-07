/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
// import { useDispatch } from "react-redux";
// import {userActions} from "../store/user/userSlice"
import { LoginSchema } from "../validation/index";
import { login } from "../firebase.js";

const Login = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const location = useLocation();
    const ref = useRef();

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
        console.log("values", values);
        await login(values.username, values.password); //validatei ekle formiğe orası hatalı
        // dispatch(userActions.setUser({userName}));
        navigate(location.state?.return_url || "/", { replace: true });
    };

    return (
        <div className="w-full h-full flex items-center gap-x-8  justify-center ">
            <div
                className="hidden md:block w-[380px] h-[581px] relative bg-logo-pattern "
                style={{ backgroundSize: "468.32px 634.15px", backgroundPosition: "-46px 0px" }}
            >
                <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]" ref={ref}>
                    <img
                        className="h-full w-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
                        src="../../public/images/screenshot1.png"
                        alt="Instagram screenshot 2"
                    />
                    <img
                        className="h-full w-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
                        src="../public/images/screenshot2.png"
                        alt="Instagram screenshot 2"
                    />
                    <img
                        className="h-full w-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
                        src="../../public/images/screenshot3.png"
                        alt="Instagram screenshot 3"
                    />
                    <img
                        className="h-full w-full absolute top-0 left-0 opacity-0 transition-opacity duration-700 ease-linear"
                        src="../public/images/screenshot4.png"
                        alt="Instagram screenshot 4"
                    />
                </div>
            </div>
            <div className="w-[350px] grid gap-y-3">
                <div className=" bg-white border p-[40px] pt-8 pb-6">
                    <a className="flex justify-center mb-8" href="">
                        <img className="h-[51px]" src="../public/images/instagramlogin.png" />
                    </a>
                    <Formik
                        initialValues={{ username: "", password: "" }}
                        onSubmit={submitHandle}
                        // validationSchema={LoginSchema}
                    >
                        {({ isSubmitting, values, isValid, dirty }) => (
                            <Form className="grid gap-y-1.5">
                                <Input
                                    // required={true}
                                    type="text"
                                    label={"Username or email"}
                                    show={true}
                                    name="username"
                                />
                                <Input
                                    // required={true}
                                    type="password"
                                    show={false}
                                    label={" Password"}
                                    name="password"
                                />

                                <button
                                    disabled={!isValid || !dirty}
                                    type="submit"
                                    className="h-[30px] rounded bg-brand mt-1 font-semibold text-white text-sm disabled-opacity-50"
                                >
                                    Log In
                                </button>
                                <div className="flex items-center my-2">
                                    <div className="h-px bg-gray-300 flex-1" />
                                    <span className="px-4 text-[13px] text-gray-500 font-semibold">
                                        OR
                                    </span>
                                    <div className="h-px bg-gray-300 flex-1" />
                                </div>
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
                    <a href="#" className="font-semibold text-brand">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
