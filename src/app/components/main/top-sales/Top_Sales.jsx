import React from 'react'
import { useSelector } from 'react-redux';
import { ProductItem } from '../../../products/ProductItem';

export const Top_Sales = () => {
    const { productsDb } = useSelector(state => state?.products)
    const filterProductsTop = productsDb?.filter(product => product.price <= 10 && product.price <= 50)

    return (
        <div className='py-20'>
            <h2 className='bg-orange-200 text-center text-stone-800 text-lg md:text-3xl font-semibold py-10 px-2 mb-8'>
                ¡No te pierdas nuestras ofertas en los productos más vendidos!
            </h2>
            {!filterProductsTop?.length && <p className='text-center'>Cargando productos...</p>}
    
            <div className='mx-auto grid grid-cols-2 md:grid-cols-4 place-items-center pt-10 gap-10'>
                {filterProductsTop.length > 0 && filterProductsTop?.map(product => <ProductItem key={product?.id} product={product} />)}
            </div>
        </div>
    )
}
