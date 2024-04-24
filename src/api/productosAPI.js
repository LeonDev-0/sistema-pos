import axios from "axios";

const productsApi = axios.create({
    baseURL:'http://localhost:3500'
})

export const getProducts = async ()=>{
    const res = await productsApi.get('/productos')
    return res.data;
}