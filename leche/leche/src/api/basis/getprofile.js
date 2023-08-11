import axios from "../axios";

const getuser=async()=>{
    return  axios.get('/user/view_profile'
    ,{headers:{authorization:localStorage.getItem("AuthBrook")}}
    )
}
export default getuser