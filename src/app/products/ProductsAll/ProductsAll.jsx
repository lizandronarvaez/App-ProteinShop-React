import React, { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import { springBootAxios } from '../../../api/axios';
import "./ProductsAll.css";
import { SpinnerProducts } from '../Spinner/SpinnerProducts';
export const ProductsAll = ({ categories }) => {
    const [dataProducts, setDataProducts] = useState([]);
    const [productListCart, setProductListCart] = useState([]);
    const getDataDB = async () => {
        const { data } = await springBootAxios.get("/products");
        setDataProducts(data)
    }
    const addProductCartList = (product_data) => setProductListCart([...productListCart, product_data]);

    useEffect(() => {
        const arrayCart = JSON.stringify(productListCart);
        localStorage.setItem('cart_products', arrayCart);
        getDataDB();
    }, [productListCart])
    return (
        <>
            {
                !dataProducts?.length ?
                    (
                        <div className='products-all'>
                            <div className='grid-products-all'>
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                            </div>
                        </div>

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
                                            <ProductItem addProductListCart={addProductCartList} product={products} checkedCategories={categories} key={products.id} />
                                        ))}
                            </div>
                        </div>
                    )
            }
        </>
    )
}
