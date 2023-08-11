import axios from "../axios";

export const getAllProduct = async () => {
    return axios.get(`/product`)
}

export const getProduct = async (product_id) => {
    return axios.get(`/product/id/${product_id}`)
}

export const getProductList = async (ids) => {
    return await ((await axios.post(`/product/cart/`, { products: ids })).data.response)
}

export const getProductOfCateegory = async (cat) => {
    return await axios.get('/product/category/' + cat)
}