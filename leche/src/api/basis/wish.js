import axios from '../axios'
const proxy = `/wish_items`

export const addWish = async (product_id) => {
    return await axios.post(`${proxy}/create`, {
        product_id: product_id,
    }
        , { headers: { authorization: localStorage.getItem("AuthBrook") } }
    )
}

export const removeWish = async (cart_id) => {
    return await axios.delete(`${proxy}/${cart_id}`)
}

export const getWish = async (token) => {
    return await axios.get(`${proxy}/`
        , { headers: { authorization: token } }
    )
}