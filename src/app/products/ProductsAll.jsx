import React from 'react'
import { ProductItem } from './ProductItem'
import { ProductNotFound } from '../../../public'
export const ProductsAll = ({ categories, productsDb }) => {

    return (

        <div className='flex-1 mt-10 lg:mt-0'>
            <h3 className='text-stone-500 font-semibold lg:text-4xl'>Listado de productos</h3>
            {
                productsDb &&
                <div className={`grid gap-10 
                    ${productsDb.length === 1 ? 'grid-cols-1' : productsDb.length === 2 ? 'grid-cols-2' : productsDb.length === 3 ? 'grid-cols-2' : 'grid-cols-2'} 
                    ${productsDb.length > 3 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
                    {
                        categories?.length ? (
                            productsDb.filter(product => (
                                categories.includes(product.category.name)
                            )).map((products, i) => (
                                <ProductItem product={products} checkedCategories={categories} key={products.id} />
                            )))
                            : productsDb.map((products, i) => (
                                <ProductItem product={products} checkedCategories={categories} key={products.id} />
                            ))}
                </div>
            }
            {
                !productsDb.length &&
                <div className='text-center'>
                    <img
                        className='w-44 mx-auto py-20' src={ProductNotFound} alt={ProductNotFound} />
                    <p className='text-orange-600'>No se encontrados productos con esa busqueda</p>
                </div>
            }
        </div>

    )
}
