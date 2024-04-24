import { create } from 'zustand';

const useStore = create((set) => ({
  productos: [],
  addProductos: (pro) => set((state) => ({ productos: [...state.productos, pro] })),

  removeProducto: (productoId) =>set((state) => ({ productos: state.productos.filter((p) => p.id !== productoId) })),

  editProducto: (producto)=>set((state)=>({productos: state.productos.map((p)=>p.id === producto.id ? producto : p)})),

}));

export default useStore;