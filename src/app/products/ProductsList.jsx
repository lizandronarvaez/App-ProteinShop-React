import React, { useEffect, useState } from 'react'
import "./ProductsList.css";
import { ProductFilter } from './ProductFilter/ProductFilter';
import { ProductsAll } from './ProductsAll/ProductsAll';
import { springBootAxios } from '../../api/axios';
import { SpinnerCategory } from './Spinner/SpinnerCategory';
export const ProductsList = () => {

    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const getCategoriesDB = async () => {
        const { data } = await springBootAxios.get("/categories");
        setCategories(data);
    }

    const handleSelectedCategoriesChange = (newSelectedCategories) => setSelectedCategories(newSelectedCategories);
    useEffect(() => { getCategoriesDB(); }, [])
    return (
        <>
            <div className='container'>
                <div className='grid-products'>
                    {/* Cajas de filtros de productos */}
                    <div className='filter-products'>
                        <h3>Filtros</h3>
                        <div className='filter-products-list'>
                            {
                                !categories.length ? (
                                    <SpinnerCategory />
                                ) : (

                                    <ProductFilter nameFilter={"Categorías"} data={categories} onCategoriesChange={handleSelectedCategoriesChange} />
                                )
                            }
                        </div>
                    </div>
                    {/* LISTA CON TODOS LOS PRODUCTOS */}
                    <ProductsAll categories={selectedCategories} />
                </div>
            </div>
        </>
    )
}
