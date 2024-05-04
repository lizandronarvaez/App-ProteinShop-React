import React, { useEffect, useState } from 'react'
import "./Top_Sales.css";
import { Grid_Card_Item } from './Grid-Card/Grid_Card_Item';
import { springBootAxios } from '../../../../api/axios';
export const Top_Sales = () => {
    const [products, setProducts] = useState([]);

    const getDataDB = async () => {
        const { data } = await springBootAxios.get("/products")
        const filterProductsTop = data.filter(product => product.price >= 10 && product.price <= 30)
        setProducts(filterProductsTop)
    }
    useEffect(() => {
        getDataDB();
    }, [])
    return (
        <div className='container products-tops-sales'>
            <h2>TOP Productos Ventas</h2>
            <div className='grid'>
                <Grid_Card_Item productsTop={products}/>
            </div>
        </div>
    )
}
