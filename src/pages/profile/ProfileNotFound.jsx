/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'

const ProfileNotFound = () => {
  return (
    <div className='text-center grid gap-y-6 pt-6'>
      <h6 className="text-[22px] font-semibold">Profile Not Found</h6>
      <p>
        Sorry, this page isn't available. <Link to="/">Go back to Instagram HomePage.</Link>
      </p>
    </div>
  )
}

export default ProfileNotFound
