import axios from "../axios";

export const getSliderImages = async () => {
    return await axios.get('/slider/')
}