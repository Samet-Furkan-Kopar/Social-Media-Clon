/* eslint-disable react/prop-types */


const Separator = ({label="OR"}) => {
  return (
    <div className="flex items-center my-2">
    <div className="h-px bg-gray-300 flex-1" />
    <span className="px-4 text-[13px] text-gray-500 font-semibold">
        {label}
    </span>
    <div className="h-px bg-gray-300 flex-1" />
</div>
  )
}

export default Separator
