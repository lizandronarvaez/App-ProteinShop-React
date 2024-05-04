import React, { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import { springBootAxios } from '../../../api/axios';
import "./ProductsAll.css";
export const ProductsAll = ({ categories }) => {
    const [dataProducts, setDataProducts] = useState([]);
    const getDataDB = async () => {
        const { data } = await fetch("/products",{method:"get"});
        setDataProducts(data)
    }
    // Filtrar los productos
    useEffect(() => { getDataDB(); }, [])
    return (
        <>
            {
                !dataProducts?.length ?
                    (
                        <h3>Cargando productos...</h3>
                    ) :
                    (

                        <div className='products-all'>
                            <h3>Listado de productos</h3>
                            <div className='grid-products-all'>
                                {
                                    categories?.length ? (

                                        dataProducts.filter(product => (
                                            categories.includes(product.category.name)
                                        )).map((product, i) => (
                                            <ProductItem key={i} product={product} />

                                        )))
                                        : dataProducts.map((products, i) => (
                                            <ProductItem product={products} checkedCategories={categories} key={products.id} />
                                        ))}
                            </div>
                        </div>
                    )
            }
        </>
    )
}
