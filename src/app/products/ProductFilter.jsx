import React, { useEffect, useState } from 'react'
import FilterCategory from "../../../public/svg/categoryFilter.svg";
import { useSelector } from 'react-redux';
import { SpinnerCategory } from './Spinner/SpinnerCategory';

export const ProductFilter = ({ nameFilter, onCategoriesChange }) => {
    const { productsDb, categories } = useSelector(state => state.products);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [dataCategories, setDataCategories] = useState([]);

    const [toggleCategory, setToggleCategory] = useState(false);
    const handleToggleCategory = () => setToggleCategory(!toggleCategory);

    const onCategoriesValues = ({ target: { value, checked } }) => {
        checked ?
            setSelectedCategories([...selectedCategories, value])
            : setSelectedCategories(selectedCategories.filter(category => category !== value));
    }

    const filterProductByCategory = async () => {
        let updatedDataProducts = [];
        productsDb.forEach(product => {
            const { category: { name } } = product;
            const existingCategoryIndex = updatedDataProducts.findIndex(item => item.name === name);
            existingCategoryIndex !== -1 ? updatedDataProducts[existingCategoryIndex].und++
                : updatedDataProducts.push({ name: name, und: 1 });
        });
        setDataCategories(updatedDataProducts);
    }

    useEffect(() => {
        filterProductByCategory();
        onCategoriesChange(selectedCategories);
    }, [selectedCategories, onCategoriesChange])
    return (
        <>
            <div className='w-full lg:w-1/6'>
                <h3 className='text-stone-500 text-4xl font-semibold'>Filtros</h3>
                {!categories.length && <SpinnerCategory />}
                <div className='flex justify-between border-b-2 border-b-stone-200'>
                    <h3 className='text-stone-900 mt-5'>{nameFilter}</h3>
                    <img src={FilterCategory} alt={FilterCategory} onClick={handleToggleCategory} className='cursor-pointer' />
                </div>

                {
                    toggleCategory && (
                        <div className='bg-stone-100 p-2'>
                            {
                                dataCategories.map(({ und, name }, i) => (
                                    <div className='flex items-center justify-between' key={i}>
                                        <div className='space-x-2'>
                                            <input type="checkbox" name="tipo" value={name} onChange={onCategoriesValues} checked={selectedCategories.includes(name)} />
                                            <label className=' text-xl mr-2 uppercase' htmlFor="tipo">{name}</label>
                                        </div>
                                        <p>(<span className='text-green-500 font-bold'>{und}</span>)</p>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}
