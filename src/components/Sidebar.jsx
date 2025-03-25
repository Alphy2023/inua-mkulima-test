import { Menu } from '@mui/material'
import React, { useState } from 'react'

const Sidebar = () => {
  const [activeLink,setActiveLink] = useState(null)
  const menus = [
    {
      path:"/",
      displayName:"Dashboard",
      state:"dashboard"
    },
    {
      path:"/",
      displayName:"Transactions",
      state:"dashboard"
    },
    {
      path:"/",
      displayName:"Reports",
      state:"dashboard"
    },
  ]

  return (
    <div className="w-[15rem] bg-white shadow-md h-screen">
      <ul>
        {menus?.map((menu)=>(

          <li className={`${activeLink ===menu.state ? 'border-l-4 border-l-[#E8B40A]' :
            ''
          }  py-2 px-3`}
          onClick={()=>setActiveLink(menu.state)}>{menu?.displayName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
