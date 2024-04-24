import {create} from 'zustand'
import { getProducts } from '../api/productosAPI';

const useProductsStore = create((set)=>({
    dataProductos:[],
    mostrarProductos: async()=>{
        const data = await getProducts();
        set({ dataProductos: data });
        return data;
    },
}))
export default useProductsStore;