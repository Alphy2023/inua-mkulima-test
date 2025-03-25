import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Sidebar from "@components/Sidebar";
import { useEffect } from "react";
import { Outlet} from "react-router-dom"

const UserLayout = () => {


  return (
    <>
    <Navbar/>
    <div className="flex ">
      <Sidebar/>
      <div className="bg-[#F7F7F7] flex-1">
        <Outlet/>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default UserLayout;
