import GuestLayout from "@layouts/GuestLayout";
import UserLayout from "@layouts/UserLayout";

import Login from "@views/Login";

import Dashboard from "@views/Dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
 
  // *************** USER ROUTES ***********
  {
    path: "/",
    element: <UserLayout />,
    children: [
    
      {
        path: "/",
        element: <Dashboard />,
      },

     

    ],
  },
  
  // *************** QUEST ROUTES ***********
  {
    path: "/auth",
    element: <GuestLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      
    ],
  },
  // ***************/ QUEST ROUTES ***********

]);

export default router;