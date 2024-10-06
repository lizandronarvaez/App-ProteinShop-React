import React from 'react'
import cartout from "../../../../public/svg/cart_out.svg";
import { MdDeleteForever } from "react-icons/md";
import { deleteProductCart } from '../../store/CartTrolleySlice';
import { useDispatch } from 'react-redux';

export const TrolleyItem = ({ cartProducts }) => {
    const dispatch = useDispatch();
    const deleteProductCartList = (id) => dispatch(deleteProductCart(id))
    return (
        <div className="p-4">
            {
                cartProducts.length > 0 &&
                cartProducts.map((product, i) => (
                    <div className="flex justify-between items-center bg-gray-50 border-b p-3 rounded-lg mb-2" key={i}>
                        <div className="flex items-center">
                            <img className="w-20 h-20 object-cover rounded-md" src={product.imageProduct} alt={product.fullname} />
                            <div className="ml-4">
                                <h3 className="text-md font-medium text-stone-700 capitalize">{product.fullname}</h3>
                                <p className="text-lg md:text-xl text-stone-500">{product.price.toFixed(2)}€</p>
                            </div>
                        </div>
                        <button className="text-red-600 font-semibold text-4xl" onClick={() => deleteProductCartList(product.id)}>
                            <MdDeleteForever />
                        </button>
                    </div>
                ))
            }
            {
                !cartProducts.length && <div className="text-center py-10">
                    <h3 className="text-lg font-semibold text-gray-600">Tu carrito está vacío</h3>
                    <img src={cartout} alt="Carrito vacío" className="mx-auto mt-4 w-24" />
                </div>
            }
        </div>
    )
}
