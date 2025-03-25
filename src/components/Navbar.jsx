import React from 'react'
import { MdOutlineLogout } from "react-icons/md";
const Navbar = () => {
  return (
    <div className="h-[80px] w-full bg-gray-800 text-white
    flex items-center justify-between px-4 font-bold">
      <div >
        <h4 className="navbar-left-title">Inua Mkulima Subsidy Program</h4>
      </div>

      <div className="flex items-center gap-3 ">
        <div className="flex items-center gap-1">
        <h4>Logged in as:
          </h4>
          <span>Kimathi</span>
        </div>
        <div className="w-[54px]p h-[23px]p 
        navbar-logout-btn w-[120px] text-black
        border py-2 px-3 flex items-center gap-3">
        <MdOutlineLogout className="text-[30px]p"/>
        <span className="text-[14px]">

        Logout
        </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
