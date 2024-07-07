import React, { useEffect, useState } from 'react'
import "./Top_Sales.css";
import { Grid_Card_Item } from './Grid-Card/Grid_Card_Item';
import { springBootAxios } from '../../../../api/axios';
import { SpinnerProducts } from '../../../products/Spinner/SpinnerProducts';
import { useCart } from '../../../context/CartTrolleyContext';
import Swal from "sweetalert2/dist/sweetalert2.all";

export const Top_Sales = () => {
    const [productsDB, setProductsDB] = useState([]);
    const {cartProducts,setCartProducts}=useCart();
    const getDataDB = async () => {
        const { data } = await springBootAxios.get("/products")
        const filterProductsTop = data.filter(product => product.price >= 10 && product.price <= 50)
        setProductsDB(filterProductsTop)
    }

    const addProductCartList=(product)=>{
        const isProductInCart = cartProducts.some(item => item.id === product.id);
        if (isProductInCart) {
            Swal.fire("El producto ya está en tu carrito", "", "error")
            return;
        }
        Swal.fire("Agregado a carrito", "", "success")
        setCartProducts([...cartProducts, product])
    }
    useEffect(() => { getDataDB(); }, [])
    return (
        <div className='container products-tops-sales'>
            <h2>TOP Productos Ventas</h2>
            <div className='grid'>
                {
                    !productsDB.length ?
                        (
                            <>
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />
                                <SpinnerProducts />

                            </>
                        )
                        : <Grid_Card_Item productsTop={productsDB} addProductCartList={addProductCartList} />

                }
            </div>
        </div>
    )
}
