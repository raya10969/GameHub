import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '070cfe53fe4d4597ae8327abe0b125d8'
    }
})