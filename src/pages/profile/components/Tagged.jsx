import Icon from "../../../components/Icon";
const Tagged = () => {
  return (
   <div className="flex flex-col justify-center items-center gap-4 pt-10">
     <div className="w-[62px] h-[62px] border-2 rounded-full border-black flex items-center justify-center ">
      <Icon size={29} name="tag"/>
    </div>
    <h6 className="text-[28px] font-light">No Photos</h6>
   </div>
  )
}

export default Tagged
