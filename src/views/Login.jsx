import CustomInput from "@components/CustomInput";
import { Formik } from "formik";
import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  const [currStep,setCurrStep] = useState("username")

  let schema = Yup.object().shape({
    username: Yup.string()
      .required("Username required."),
     password: Yup.string()
      .required("Password required."),
  });

  const formik = useFormik({
    initialValues: {
      emailOrUsername: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async(values) => {
     console.log("values")
   },
  });

  const hanndleNextStep = (value) =>{
    setCurrStep(value)
  }
  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <img
          src="/login-bg-img.png"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2p h-[300px]p login-left-card">
      <form
      onSubmit={formik.handleSubmit}>

        <div className=" p-5 flex items-centerp justify-centerp ">
          <div className="bg-whitep p-10p shadow-lgp rounded-lgp w-96p">
            <div>
              <h2 className="text-[20px] mb-6 font-medium 
              capitalize login-fomr-left-title">Welcome to</h2>
              <h1 className="text-capitalize text-subtitle subtitle">Inua Mkulima subsidy program</h1>

            <form>
             
              {currStep==="username" && (
                <>
                 <div>
                <h3 className="form-upper-label font-medium font-[Poppins]">Enter username to continue</h3>
              </div>
              <CustomInput
              onBlur={formik.handleBlur("username")}
              val={formik.values.username}
              onChng={formik.handleChange("username")}
              name="username"
              label="Username"
              />
                </>
              )}
              {currStep==="password" && (
                <>    
                
                <div>
                <h3 className="form-upper-label font-medium font-[Poppins]">Enter password to continue</h3>
              </div>
                
                <CustomInput 
                name="password"
                onBlur={formik.handleBlur("username")}
                val={formik.values.username}
                onChng={formik.handleChange("username")}
                type="password"
                label="Password"
                />
                </>
              )}
              
              <button className="w-full bg-[#E8B40A] relative
              text-center justify-center text-white py-2 rounded-lg
               hover:bg-opacity-100 transition bg-opacity-80 flex items-center "
               type={"button"}
               onClick={()=>currStep==='username' ?hanndleNextStep("password") : {}}>
                <div className="">
                {currStep ==='username' ?'Continue' : 'Login'}
                </div>
                <div className="absolute right-3">

                <MdChevronRight className="ml-3 text-[20px]" />
                </div>
              </button>
            </form>
           
          </div>
        </div>
        </div>
      </form>

      </div>
    </div>
  );
};

export default Login;
