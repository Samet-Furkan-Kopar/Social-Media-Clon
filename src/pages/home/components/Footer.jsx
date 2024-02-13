import Icon from '../../../components/Icon'

const Footer = () => {
  return (
    <footer className="h-[60px]  flex items-center justify-between  ">
    <div className='flex items-center justify-between gap-x-4 '>
    <Icon className="hearth" name="hearth" size={20}/>
    <Icon className="comment" name="comment" size={20}/>
    <Icon className="post-share" name="post-share" size={20}/>
    
    </div>

      <Icon className="" name="save" size={20}/>

    {/* <Icon name="info" size={20}/> */}
  </footer>
  )
}

export default Footer
