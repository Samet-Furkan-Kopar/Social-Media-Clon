/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import { FaFacebookSquare } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Button from "../../components/Button";
import Seperator from "../../components/Separator";
import Loader from "../../components/Loader";
import { register } from "../../firebase.js";
import * as yup from "yup";
import classNames from "classnames";
import { Helmet } from "react-helmet";

const Register = () => {
    // const schema = yup.object({
    //     username: yup.string().required("Email Formatı Uygun Değil"),
    //     password: yup.string().required("Şifre gerekli*"),
    //email: Yup.string().email("Geçerli bir email giriniz").required("Email Zorunludur"),
    // full_name: Yup.string().required("Ad Soyad Zorunludur"),
    // });
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    console.log(loading, "loading");

    const submitHandle = async (values) => {
        setLoading(true);
        //validatei ekle formiğe orası hatalı
        // dispatch(userActions.setUser({userName}));
        const response = await register(values);
        console.log(response, "response");
        if (response) {
            
            console.log("response", response);
            setTimeout(() => {
                setLoading(false);
                navigate("/inbox", { replace: true });
            }, 3000);
        }
    };
  return (
    
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="w-[350px] grid gap-y-3">
                    <Helmet>
                        <title>Sign Up • Instagram</title>
                    </Helmet>
                    <div className=" bg-white border p-[40px] pt-8 pb-6">
                        <a className="flex justify-center mb-8" href="">
                            <img className="h-[51px]" src="/images/instagramlogin.png" alt="Instagram Login" />
                        </a>
                        <p className="text-[17px] text-center text-[#8e8e8e] mb-6">
                            Sign up to see photos and videos from your friends.
                        </p>
                        <Button>
                            <FaFacebookSquare size={20} />
                            Log in with Facebook
                        </Button>
                        <Seperator label="OR" />
    
                        <Formik
                            initialValues={{ username: "", password: "", email: "", full_name: "" }}
                            onSubmit={submitHandle}
                            // validationSchema={schema}
                        >
                            {({ isSubmitting, values, isValid, dirty }) => (
                                <Form className="grid gap-y-1.5">
                                    <Input
                                        required={true}
                                        type="email"
                                        show={true}
                                        label={" Email"}
                                        name="email"
                                    />
                                    <Input
                                        required={true}
                                        type="text"
                                        show={true}
                                        label={" Full Name"}
                                        name="full_name"
                                    />
                                    <Input
                                        required={true}
                                        type="text"
                                        label={"Username"}
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
                                    <Button disabled={isSubmitting || !isValid || !dirty} type="submit">
                                        Sign Up
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className=" bg-white border p-4 text-sm text-center">
                        Have an account?
                        <Link to={"/auth/login"} className="font-semibold text-brand pl-3">
                            Log In
                        </Link>
                    </div>
                </div>
            )}
        </>
    );    
    // return (
         
    //         <div className="w-[350px] grid gap-y-3">
    //             <Helmet>
    //                 <title>Sign Up • Instagram</title>
    //             </Helmet>
    //             <div className=" bg-white border p-[40px] pt-8 pb-6">
    //                 <a className="flex justify-center mb-8" href="">
    //                     <img className="h-[51px]" src="/images/instagramlogin.png" />
    //                 </a>
    //                 <p className="text-[17px] text-center text-[#8e8e8e] mb-6">
    //                     Sign up to see photos and videos from your friends.
    //                 </p>
    //                 <Button>
    //                     <FaFacebookSquare size={20} />
    //                     Log in with Facebook
    //                 </Button>
    //                 <Seperator label="OR" />

    //                 <Formik
    //                     initialValues={{ username: "", password: "", email: "", full_name: "" }}
    //                     onSubmit={submitHandle}
    //                     // validationSchema={schema}
    //                 >
    //                     {({ isSubmitting, values, isValid, dirty }) => (
    //                         <Form className="grid gap-y-1.5">
    //                             <Input
    //                                 required={true}
    //                                 type="email"
    //                                 show={true}
    //                                 label={" Email"}
    //                                 name="email"
    //                             />
    //                             <Input
    //                                 required={true}
    //                                 type="text"
    //                                 show={true}
    //                                 label={" Full Name"}
    //                                 name="full_name"
    //                             />
    //                             <Input
    //                                 required={true}
    //                                 type="text"
    //                                 label={"Username"}
    //                                 show={true}
    //                                 name="username"
    //                             />
    //                             <Input
    //                                 required={true}
    //                                 type="password"
    //                                 show={false}
    //                                 label={" Password"}
    //                                 name="password"
    //                             />
    //                             <Button disabled={isSubmitting || !isValid || !dirty} type="submit">
    //                                 Sign Up
    //                             </Button>
    //                         </Form>
    //                     )}
    //                 </Formik>
    //             </div>
    //             <div className=" bg-white border p-4 text-sm text-center">
    //                 Have an account?
    //                 <Link to={"/auth/login"} className="font-semibold text-brand pl-3">
    //                     Log In
    //                 </Link>
    //             </div>
    //         </div>
        
    // );
};

export default Register;
