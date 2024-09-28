import React from 'react'
import { useSelector } from 'react-redux';
import { ProductItem } from '../../../products/ProductItem';

export const Top_Sales = () => {
    const { productsDb } = useSelector(state => state.products)
    const filterProductsTop = productsDb.filter(product => product.price <= 10 && product.price <= 50)

    return (
        <div className='py-20'>
            <h2 className='bg-orange-200 uppercase font-light text-center text-stone-600 text-3xl md:text-5xl py-10'>TOP Productos Ventas</h2>
            {!filterProductsTop?.length && <p className='text-center'>Cargando productos...</p>}
            <div className='mx-auto grid grid-cols-2 md:grid-cols-4 place-items-center pt-10 gap-10'>
                {filterProductsTop.length && filterProductsTop.map(product => <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    )
}
