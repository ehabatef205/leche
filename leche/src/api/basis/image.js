import axios from "../axios";

export const getImages = async () => {
    return await axios.get('/image/')
}