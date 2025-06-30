import { Link } from "react-router"
import { FakebookLogo, GroupIcon, HomeIcon, MarketIcon, MenuIcon, MessengerIcon, NotificationIcon, PlayIcon, SearchIcon } from "../icons"
import useUserStore from "../stores/userStore"
import Avatar from "./Avatar"

function Header() {
  const logout = useUserStore(state => state.logout)
  const user = useUserStore(state=>state.user)
  return (
    <div className="flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10">
      {/* Search Bar */}
      <div className="flex-1 flex gap-2 items-center">
        <FakebookLogo className='w-12' />
        <label className="input rounded-full">
          <input placeholder="Search" />
          <SearchIcon className='w-5 opacity-60' />
        </label>
      </div>
      {/* Navigator */}
      <div className="flex-1 flex gap-2 justify-center">
        <Link to='/' className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        ><HomeIcon className="w-7" /></Link>
        <Link to='/' className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        ><PlayIcon className="w-7" /></Link>
        <Link to='/' className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        ><MarketIcon className="w-7" /></Link>
        <Link to='/' className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        ><GroupIcon className="w-7" /></Link>
      </div>

      {/* Right * Dropdown */}
      <div className="flex-1 flex gap-2 justify-end">
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MenuIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <MessengerIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
            <NotificationIcon className="w-7" />
          </div>
        </div>
        <div className="dropdown dropdown-end mt-1">
          <div tabIndex={0} role="button" className="btn m-1 btn-circle">
            <Avatar menu right='-4' bottom='-3.5' className="w-10"
              imgSrc={user.profileImage}            
            />
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a><Link to='/profile'>Profile</Link></a></li>
            <li><a onClick={logout}>Logout</a></li>
          </ul>
        </div>
        {/* <Avatar menu className="w-11" imgSrc="https://www.svgrepo.com/show/420323/avatar-avocado-food.svg"/> */}

      </div>
    </div>
  )
}

export default Header