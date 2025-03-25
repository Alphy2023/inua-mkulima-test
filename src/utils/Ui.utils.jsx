

// reusable placholdertest element
  export const PlaceholderText = ({isRequired,title}) =>{
    return (
        <p className="font-bodyFont text-[14px] font-semibold">
            {title} 
            {isRequired && (
        <span className="text-errorColor ml-1">*</span>
            )}
        </p>
    )
   }