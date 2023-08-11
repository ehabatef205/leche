import axios from "../axios";

const updateuser=async( first_name, last_name , telephone)=>{
    return  axios.patch('/user/update_profile'
    ,{first_name, last_name , telephone},
    {headers:{authorization:localStorage.getItem("AuthBrook")}}
    )
}
export default updateuser