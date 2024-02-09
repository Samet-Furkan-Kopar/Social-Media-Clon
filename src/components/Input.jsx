/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useField } from "formik";
import classNames from "classnames";

export default function Input({ label, ...props }) {
    // const inputRef = useRef();
    const [show, setShow] = useState(props?.show || false);
    console.log("props", props);
    const [type, setType] = useState(props?.type || "text");
    // eslint-disable-next-line no-unused-vars
    const [field, meta, helpers] = useField(props);
    useEffect(() => {
        if (show) {
            setType("text");
            // inputRef.current.focus();
        } else {
            setType("password");
            // inputRef.current.focus();
        }
    }, [show]);

    return (
        <label className=" relative flex bg-zinc-50 border rounded-sm focus:within focus:border-gray-400">
            <input
                className={classNames({
                    " px-2  outline-none text-xs bg-tranparent w-full h-[38px] ": true,
                    "pt-[10px]": field?.value,
                })}
                {...field}
                {...props}
                type={type }
            />
            <small
                className={classNames({
                    "absolute  left-[9px] cursor-text pointer-events-none  text-gray-400 -translate-y-1/2 transition-all ": true,
                    "text-xs top-1/2": !field?.value, //field.value yani değer varsa yukarı çıkar
                    "text-[10px] top-2.5": field?.value,
                })}
            >
                {label}
            </small>
            {props?.type === "password" && field?.value && (
                <div
                    onClick={() => {
                        setShow((show) => !show);
                    }}
                    className=" h-full flex cursor-pointer items-center font-sm font-semibold pr-2"
                >
                    {show ? <IoMdEyeOff /> : <FaEye />}
                </div>
            )}
        </label>
    );
}
