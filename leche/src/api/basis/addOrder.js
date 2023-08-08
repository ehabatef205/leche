import axios from "../axios";

const addOrder = async (products, phone, country, firstName, lastName, address, city, zipCode, totalPrice) => {
    return axios.post('/order_items/create', {
        products: products,
        phone: phone,
        country: country,
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        zipCode: zipCode,
        payment: "cash",
        totalPrice: totalPrice
    }
        , { headers: { authorization: localStorage.getItem("AuthBrook") } }
    )
}
export default addOrder