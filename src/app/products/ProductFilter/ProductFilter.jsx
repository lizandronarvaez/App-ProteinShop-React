import React, { useEffect, useState } from 'react'
import "./ProductFilter.css";
import { springBootAxios } from '../../../api/axios';
import { SpinnerCategory } from '../Spinner/SpinnerCategory';

export const ProductFilter = ({ nameFilter, onCategoriesChange }) => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);
    const onCategoriesValues = ({ target: { value, checked } }) => {
        checked ?
            setSelectedCategories([...selectedCategories, value])
            : setSelectedCategories(selectedCategories.filter(category => category !== value));
    }

    const getDataDB = async () => {
        const { data } = await springBootAxios.get("/products");
        let updatedDataProducts = [];
        data.forEach(product => {
            const { category: { name } } = product;
            const existingCategoryIndex = updatedDataProducts.findIndex(item => item.name === name);
            existingCategoryIndex !== -1 ? updatedDataProducts[existingCategoryIndex].und++
                : updatedDataProducts.push({ name: name, und: 1 });
        });
        setDataCategories(updatedDataProducts);
    }

    useEffect(() => { getDataDB(); onCategoriesChange(selectedCategories) }, [selectedCategories])
    return (
        <div>
            <h3>{nameFilter}</h3>
            <div className='filter-product-checkbox'>
                {
                    !dataCategories.length ? (
                        <SpinnerCategory />
                ):(

                dataCategories.map(({und, name}, i) => (
                <div className='product-checkbox-type' key={i}>
                    <p>({und})</p>
                    <label htmlFor="tipo">{name}</label>
                    <input type="checkbox" name="tipo" value={name} onChange={onCategoriesValues} />
                </div>
                )
                ))
                }
            </div>
        </div>
    )
}
