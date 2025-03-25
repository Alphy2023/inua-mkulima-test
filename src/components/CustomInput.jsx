import React from 'react'

const CustomInput = ({onBlur,onChng,name,val,type,label}) => {
  return (
    <div className="mb-4">
    <label className="block text-gray-700">
      {label}
    </label>
    <input
      type={type}
      className="w-full px-4 py-2 border-b
      outline-none  border-b-gray-400 form-input 
       bg-white"
       onChange={onChng}
       onBlur={onBlur}
       name={name}
       value={val}
    />
  </div>
  )
}

export default CustomInput
