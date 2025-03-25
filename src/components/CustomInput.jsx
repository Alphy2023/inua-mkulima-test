import React from 'react'
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";
const CustomInput = ({onBlur,onChng,name,val,type,label,error}) => {
  const [newType, setNewType] = React.useState(type);
  const handlePassword = () =>{
    setNewType(newType === 'password'? 'text' : 'password')
  }
  return (
    <div className="mb-4">
    <label className="block text-gray-700">
      {label}
    </label>
    <div className="flex flex-col ">
   <div className="relative">
   <input
      type={newType}
      className="w-full px-4 py-2 border-b
      outline-none  border-b-gray-400 form-input 
       bg-white"
       onChange={onChng}
       onBlur={onBlur}
       name={name}
       value={val}
    />
    {type==='password' && (
      <div className="absolute top-5 right-3 text-gray-500
      duration-300 cursor-pointer"
      onClick={type==='password' ?handlePassword : {}}>
        {newType === 'password' ? (
          <FaRegEye/>
        ) :(
          <FaRegEyeSlash/>

        )}
      
      </div>
    )}
    
   </div>
    <small className="text-[14px] text-red-500 first-letter:capitalize">{error}</small>
    </div>
  </div>
  )
}

export default CustomInput
