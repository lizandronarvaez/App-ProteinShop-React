import React, { useEffect, useState } from 'react'
import { ProductFilter } from './ProductFilter';
import { ProductsAll } from './ProductsAll';
import { springBootAxios } from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts } from '../store/ProductsDbSlice';
export const ProductsList = () => {
    const dispatch = useDispatch();
    const { productsDb, categories } = useSelector(state => state.products);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const loadProductsDb = async () => {
        const { data: products } = await springBootAxios.get("/products");
        const { data: categories } = await springBootAxios.get("/categories");
        dispatch(getProducts(products))
        dispatch(getCategories(categories))
    }

    const handleSelectedCategoriesChange = (newSelectedCategories) => setSelectedCategories(newSelectedCategories);
    useEffect(() => { loadProductsDb(); }, [])
    return (
        <>
                <div className='container lg:space-x-10 lg:flex px-5 py-10'>
                    <ProductFilter nameFilter={"Categorías"} data={categories} onCategoriesChange={handleSelectedCategoriesChange} />
                    <ProductsAll categories={selectedCategories} productsDb={productsDb} />
                </div>
        </>
    )
}
