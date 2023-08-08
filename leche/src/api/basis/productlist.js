import axios from "../axios";


export const carts=async(ids)=>{
    return await((await axios.post(`product/cart/`,{products:ids})).data.response)
}