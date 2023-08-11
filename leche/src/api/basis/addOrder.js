import axios from "../axios";
import Cookies from 'js-cookie';

const addOrder = async (products, phone, country, firstName, lastName, address, city, zipCode, totalPrice) => {
    return axios.post('/order_items/create', {
        user_id: Cookies.get('user_id'),
        products: products,
        phone: phone,
        country: country,
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        zipCode: zipCode,
        payment: "online",
        totalPrice: totalPrice
    }
        , { headers: { authorization: localStorage.getItem("AuthBrook") } }
    )
}
export default addOrder