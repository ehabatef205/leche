import axios from '../axios'
const proxy = `/cart_items`

export const addCart = async (product_id) => {
    return await axios.post(`${proxy}/create`, {
        product_id: product_id,
        quantity: 1
    }
        , { headers: { authorization: localStorage.getItem("AuthBrook") } }
    )
}

export const removeCart = async (cart_id) => {
    return await axios.delete(`${proxy}/${cart_id}`)
}

export const getCarts = async (token) => {
    return await axios.get(`${proxy}/`
        , { headers: { authorization: token } }
    )
}

export const increse_item = async (_id) => {
    return await axios.put(`${proxy}/plus/${_id}`, {}, { headers: { authorization: localStorage.getItem("AuthBrook") } })
}

export const decrease_item = async (_id) => {
    return await axios.put(`${proxy}/minus/${_id}`, {}, { headers: { authorization: localStorage.getItem("AuthBrook") } })
}