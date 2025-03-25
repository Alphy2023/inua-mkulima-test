import userApi from "@app/api/modules/auth/user.api";


export const checkProfileNameExistence = async (value)=>{
    try {
        const { response,err } = await userApi.checkProfileName(value);
        if(err){
            return true
        }
        if(response) return false
        
    } catch (error) {
        return {error}
    }

}
export const checkEmailExistence = async (value) => {
  try {
    const { response, err } = await userApi.checkEmailExists(value);
    console.log(response)
    if (err) {
      return true;
    }
    if (response) return false;
  } catch (error) {
    return { error };
  }
};