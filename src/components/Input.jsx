/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
export default function Input({ label, ...props }) {
    const inputRef = useRef();
    const [show, setShow] = useState(props?.show || false);
    const [type, setType] = useState(props?.type || "text");
    useEffect(() => {
        if (show) {
            setType("text");
            inputRef.current.focus();
        } else {
            setType("password");
            inputRef.current.focus();
        }
    }, [show]);

    return (
        <label className=" relative flex bg-zinc-50 border rounded-sm focus:within focus:border-gray-400">
            <input
                ref={inputRef}
                className=" px-2  outline-none text-xs  w-full h-[38px] valid:pt-[10px] peer"
                {...props}
                type={type ? type : props?.type}
                required={true}
            />
            <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
                {label}
            </small>
            {props?.type === "password" && props?.value && (
                <button
                    type="button"
                    onClick={() => {
                        setShow((show) => !show);
                    }}
                    className=" h-full flex items-center font-sm font-semibold pr-2"
                >
                    {show ? <IoMdEyeOff /> : <FaEye />  }
                </button>
            )}
        </label>
    );
}
