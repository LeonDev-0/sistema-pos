import React from 'react'
import { useReactTable,flexRender,getCoreRowModel } from '@tanstack/react-table';

const TablaProdutos = ( {data}) => {
    const columns = [
        { header: "ID",
            accessorKey:'id'
        },
        { header: "Producto",
            accessorKey:'nombre'
        },
        { header: "Precio",
            accessorKey:'precio'
        },
        { header: "Stock",
            accessorKey:'stock'
        }
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
    });


  return (
    <div>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaProdutos