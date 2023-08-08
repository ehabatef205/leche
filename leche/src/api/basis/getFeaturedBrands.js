import axios from "../axios";

const getFeaturedBrands = async () => {
    return axios.get('/featured_brands/'
    )
}
export default getFeaturedBrands