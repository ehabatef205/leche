import axios from '../axios'
import Cookies from 'js-cookie';
const proxy = `/wish_items`

export const addWish = async (product_id) => {
    return await axios.post(`${proxy}/create`, {
        user_id: Cookies.get('user_id'),
        product_id: product_id,
    }
        , { headers: { authorization: localStorage.getItem("AuthBrook") } }
    )
}

export const removeWish = async (cart_id) => {
    return await axios.delete(`${proxy}/${cart_id}`)
}

export const getWish = async (token) => {
    return await axios.post(`${proxy}/`, {
        user_id: Cookies.get('user_id'),
    }
        , { headers: { authorization: token } }
    )
}