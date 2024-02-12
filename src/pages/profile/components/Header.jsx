/* eslint-disable react/prop-types */


const Header = ({user}) => {
  console.log(user && user);
  return (
    <header className="flex items-center justify-center mt-6 px-24 gap-x-24 py-4">
      <img src={"/images/avatar.jpg"} className="w-[150px] h-[150px] rounded-full"/>
      <div className="">
     <div className="mb-6 ">
     <h1  className="text-[28px] font-light">{user?.username}</h1>
     </div>
      <nav className="flex gap-x-6 items-center">
        <div> <span className="font-semibold">{user?.posts} </span> posts </div>
        <div> <span className="font-semibold">{user?.followers.length}  </span>  followers </div>
        <div> <span className="font-semibold">{user?.following.length}  </span> following </div>
      </nav>
      </div>
      
    </header>
  )
}

export default Header
