/* eslint-disable react/prop-types */
import Icon from '../../../../components/Icon'

const Header = ({user}) => {
  return (
    <header className="h-[60px] border-b border-gray-300 flex items-center justify-between px-4">
      <button className='flex items-center justify-between gap-x-4 '>
        <img className='w-6 h-6 rounded-full' src={user.avatar}/>
        <h6 className='text-base font-semibold'>{user.name}</h6>
      </button>
      <Icon name="info" size={20}/>
    </header>
  )
}

export default Header
