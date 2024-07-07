import React, { useContext, useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import { springBootAxios } from '../../../api/axios';
import "./ProductsAll.css";
import { SpinnerProducts } from '../Spinner/SpinnerProducts';
import { useCart } from '../../context/CartTrolleyContext';
import Swal from "sweetalert2/dist/sweetalert2.all";
export const ProductsAll = ({ categories }) => {

    const { cartProducts, setCartProducts } = useCart();
    const [dataProducts, setDataProducts] = useState([]);

    const getDataDB = async () => {
        const { data } = await springBootAxios.get("/products");
        setDataProducts(data)
    }
    const addProductCartList = (product_data) => {
        const isProductInCart = cartProducts.some(item => item.id === product_data.id);
        if (isProductInCart) {
            Swal.fire("El producto ya esta añadido", "", "error")
            return;
        }
        Swal.fire("Agregado a carrito", "", "success")
        setCartProducts([...cartProducts, product_data])
    };
    useEffect(() => { getDataDB(); }, [])
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
                                        )).map((products, i) => (
                                            <ProductItem addProductListCart={addProductCartList} product={products} checkedCategories={categories} key={products.id} />

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
