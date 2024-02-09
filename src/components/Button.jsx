/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const Button = ({ type = "button", children, ...props }) => {
    return (
        <button
            className="h-[30px] rounded w-full flex items-center gap-x-2 justify-center bg-brand mt-1 font-semibold text-white text-sm disabled-opacity-50"
            type={type}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
