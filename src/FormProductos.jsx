import React, { useState } from 'react'
import useStore from './store';
import { v4 } from 'uuid';

const FormProductos = () => {

    const { productos, addProductos, removeProducto, editProducto } = useStore()

    const [nuevoProducto, setNuevoProducto] = useState({
        nombre: '',
        precio: 0,
        stock: 0,
    })

    const [productoEditando,setProductoEditando] = useState(null);

    const handleAddPro = (e) => {
        e.preventDefault();


        const addId = {...nuevoProducto, id:v4()}
        addProductos(addId)
        setNuevoProducto({
            nombre: '',
            precio: 0,
            stock: 0,
        })
    }

    const handleEditPro = (e)=>{
        e.preventDefault();

        const updatePro = {
            id:productoEditando,
            nombre:nuevoProducto.nombre,
            precio:nuevoProducto.precio,
            stock:nuevoProducto.stock
        };

        editProducto(updatePro);

        setNuevoProducto({
            nombre: '',
            precio: 0,
            stock: 0,
        })
        setProductoEditando(null)

    }

    const startEditing = (id)=>{
        const producto = productos.find(p=>(p.id === id));
        setNuevoProducto({...producto});
        setProductoEditando(id);

    }

    const editCancel = ()=>{

        setNuevoProducto({
            nombre: '',
            precio: 0,
            stock: 0,
        })
        setProductoEditando(null)
    }

    return (

        <div>
            <h1>NuevosProductos</h1>
            <form onSubmit={productoEditando ? handleEditPro : handleAddPro}>
                <input
                    type="text"
                    placeholder='Nombre'
                    value={nuevoProducto.nombre}
                    onChange={(e) => setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })}
                />
                <input
                    type="number"
                    placeholder='Precio'
                    value={nuevoProducto.precio}
                    onChange={(e) => setNuevoProducto({ ...nuevoProducto, precio: parseInt(e.target.value) })}
                />
                <input
                    type="number"
                    placeholder='Stock'
                    value={nuevoProducto.stock}
                    onChange={(e) => setNuevoProducto({ ...nuevoProducto, stock: parseInt(e.target.value) })}
                />
                <input
                    type="submit"
                    value={productoEditando? 'Guardar Cabios': 'Registrar'}
                />
                {productoEditando && <button onClick={editCancel}>Cancelar</button>}
            </form>
            <hr />

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((p, index) => (
                            <tr key={index}>
                                <td>{p.nombre}</td>
                                <td>{p.precio}</td>
                                <td>{p.stock}</td>
                                <td><button onClick={()=>removeProducto(p.id)}>Eliminar</button> 
                                <button onClick={()=>startEditing(p.id)}>Editar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default FormProductos