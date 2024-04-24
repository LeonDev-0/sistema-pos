import React from 'react'
import useProductsStore from '../../store/useProductsStore'
import TablaProdutos from '../organismos/tablas/TablaProdutos';

const ProductosTemplate = () => {
    const {dataProductos} = useProductsStore();
  return (
    <div>
        <TablaProdutos data = {dataProductos}/>
    </div>
  )
}

export default ProductosTemplate