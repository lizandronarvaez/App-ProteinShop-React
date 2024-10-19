import React, { useEffect, useState } from 'react'
import { ProductFilter } from './ProductFilter';
import { ProductsAll } from './ProductsAll';
import { springBootAxios } from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProducts } from '../store/ProductsDbSlice';
import { useSearchParams } from 'react-router-dom';
export const ProductsList = () => {

    const [URLSearchParams] = useSearchParams()
    const searchProduct = URLSearchParams.get("description")

    const dispatch = useDispatch();
    const { productsDb, categories } = useSelector(state => state.products);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const loadProductsDb = async () => {
        const { data: products } = await springBootAxios.get("/products");
        const { data: categories } = await springBootAxios.get("/categories");
        dispatch(getProducts(products))
        dispatch(getCategories(categories))
    }
    const handleSelectedCategoriesChange = (newSelectedCategories) => setSelectedCategories(newSelectedCategories);
    const handleSearchProduct = () => {
        if (searchProduct) {
            setFilteredProducts(productsDb.filter(product => product.description.toLowerCase().includes(searchProduct)));
        } else {
            setFilteredProducts(productsDb);
        }
    };

    useEffect(() => { loadProductsDb(); }, [])
    useEffect(() => {
        handleSearchProduct();
    }, [searchProduct, productsDb]);
    return (
        <>
            <div className='w-11/12 md:w-4/5 mx-auto lg:space-x-10 lg:flex px-5 py-10'>
                <ProductFilter nameFilter={"Categorías"} data={categories} onCategoriesChange={handleSelectedCategoriesChange} />
                <ProductsAll categories={selectedCategories} productsDb={filteredProducts} />
            </div>
        </>
    )
}
