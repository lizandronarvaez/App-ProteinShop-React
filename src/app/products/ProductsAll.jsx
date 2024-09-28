import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductsAll = ({ categories, productsDb }) => {

    return (
        <>
            <div className='flex-1 mt-10 lg:mt-0'>
                <h3 className='text-stone-500 font-semibold lg:text-4xl'>Listado de productos</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
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
            </div>
        </>
    )
}
