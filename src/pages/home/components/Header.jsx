import Icon from '../../../components/Icon'

const Header = () => {
  return (
    <header className="h-[60px]  flex items-center justify-between  ">
      <div className='flex items-center justify-between gap-x-4 '>
        <img className='w-6 h-6 rounded-full' src="/images/avatar2.png"/>
        <h6 className='text-base font-semibold'>Samet Furkan</h6>
        <h6 className='text-sm '>18d</h6>
      </div>

        <Icon className="" name="dot" size={20}/>

      {/* <Icon name="info" size={20}/> */}
    </header>
  )
}

export default Header
