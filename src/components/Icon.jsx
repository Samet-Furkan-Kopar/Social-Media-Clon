/* eslint-disable react/prop-types */
import SVG from "react-inlinesvg";
// eslint-disable-next-line no-unused-vars
const Icon = ({ name, size = 16, ...props }) => {
    return (
        <>
            <SVG
                src={`/icons/${name}.svg`}
                width={size}
                height={size}
                //  preProcessor={(code)=> code.replace(/fill=".*?"/g, 'fill = "currentColor"')}
            />
        </>
    );
};

export default Icon;
