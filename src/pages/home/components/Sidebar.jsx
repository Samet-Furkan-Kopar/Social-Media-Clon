/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Sidebar = ({user}) => {
  return (
    <header className="h-[60px] flex items-center justify-between px-4 flex-col">
    <button className='flex items-center justify-between gap-x-4 my-4'>
      <img className='w-9 h-9 rounded-full' src="/images/avatar2.png"/>
    <div className="flex flex-col">
    <h6 className='text-base font-semibold'>Samet Furkan</h6>
      <h6 className='text-xs '>Senin için öneriliyor..</h6>
    </div>
    </button>
    <button className='flex items-center justify-between gap-x-4  my-4'>
      <img className='w-9 h-9 rounded-full' src="/images/avatar2.png"/>
    <div className="flex flex-col">
    <h6 className='text-base font-semibold'>Samet Furkan</h6>
      <h6 className='text-xs '>Senin için öneriliyor..</h6>
    </div>
    </button>
    <button className='flex items-center justify-between gap-x-4  my-4'>
      <img className='w-9 h-9 rounded-full' src="/images/avatar2.png"/>
    <div className="flex flex-col">
    <h6 className='text-base font-semibold'>Samet Furkan</h6>
      <h6 className='text-xs '>Senin için öneriliyor..</h6>
    </div>
    </button>
    
  </header>
  )
}

export default Sidebar
