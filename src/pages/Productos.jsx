import { useQuery } from '@tanstack/react-query'
import useProductsStore from '../store/useProductsStore';
import ProductosTemplate from '../components/templates/ProductosTemplate';
const Productos = () => {
  const { mostrarProductos} = useProductsStore();
  const { isLoading, isError, error} = useQuery({
    queryKey: ['productos'],
    queryFn: mostrarProductos
  })

  if (isLoading) return <div>Loading....</div>
  else if (isError) return <div>Error:{error.message}</div>

  return (
    <ProductosTemplate/>
  )
}

export default Productos