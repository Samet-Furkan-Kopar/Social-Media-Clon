import { FaInstagram } from "react-icons/fa6";
const Loader = () => {
  return (
    <div className='w-full h-full fixed bg-zinc-50 top-0 left-0 text-pink-600 flex justify-center items-center flex-col'>
     <FaInstagram size={100}/>
     <p className="flex items-center justify-center pt5 ">Loading...</p>
    </div>
  )
}

export default Loader
