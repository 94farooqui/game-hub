import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params: {
        key : '8638e0b8d2e64a3797d9162bf470f19f'
    }
})