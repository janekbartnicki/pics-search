import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Zho4rglU8-6nRm_CJduROto1eQ_aukSz24KJpe7-bPY'
    }
})