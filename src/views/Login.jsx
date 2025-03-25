import CustomInput from "@components/CustomInput";
import { Formik } from "formik";
import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { loginURL } from "@configs/base_url";
const Login = () => {
  const [currStep,setCurrStep] = useState("username")
  const [erroMessage,setErrorMessage] = useState("")

  const navigate = useNavigate()

  let schema = Yup.object().shape({
    username: Yup.string()
      .required("Username required."),
     password: Yup.string()
      .required("Password required."),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async(values) => {
     navigate("/")
    //  const res = await axios.post(loginURL,values)
    //  console.log("res:",res.response.data)
    //  return
   },
  });

  const handleNextStep = () => {
    if (currStep === "username" && formik.values.username) {
      setCurrStep("password");
    }
  };
  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-gray-200 items-center
      hidden lg:flex justify-center">
        <img
          src="/login-bg-img.png"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2p h-[300px]p login-left-card
      flex justif-center
      h-[400px] w-[450px]
      lg:top-[93px]
      lg:left-[843px]
      lg:w-[483px]
      lg:h-[583px]
      ">
      <form
      onSubmit={formik.handleSubmit}
      >

        <div className=" p-5 flex items-centerp justify-centerp ">
          <div className="bg-whitep p-10p shadow-lgp rounded-lgp w-96p">
            <div>
              <h2 className="text-[20px] mb-6 font-medium 
              capitalize login-fomr-left-title">Welcome to</h2>
              <h1 className="text-capitalize text-subtitle subtitle">Inua Mkulima subsidy program</h1>
             {erroMessage && (

              <div className="flex items-center justify-center text-center mx-auto gap-2 text-red-500 py-2 px-3">{errorMessage}</div>
             )}
             
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
              error={
                formik.touched.username && formik.errors.username
              }

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
                onBlur={formik.handleBlur("password")}
                val={formik.values.password}
                onChng={formik.handleChange("password")}
                type="password"
                label="Password"
                error={
                  formik.touched.password && formik.errors.password
                }
                />
                </>
              )}
              
              <button className="w-full bg-[#E8B40A] relative
              text-center justify-center text-white py-2 rounded-lg
               hover:bg-opacity-100 transition bg-opacity-80 flex items-center "
               type={currStep =='username' ? 'button ':"submit"}
               onClick={()=>currStep=='username' ?
                handleNextStep("password") :{}}>
                <div className="">
                {currStep =='username' ?'Continue' : 'Login'}
                </div>
                <div className="absolute right-3">

                <MdChevronRight className="ml-3 text-[25px]" />
                </div>
              </button>
           
          </div>
        </div>
        </div>
      </form>

      </div>
    </div>
  );
};

export default Login;
