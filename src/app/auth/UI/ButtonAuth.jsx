import React from 'react'

export const ButtonAuth = ({ type,onclick }) => {
    return (
        <button
            className='w-full py-4 px-2 bg-slate-600 hover:bg-slate-700 mt-5 text-white text-3xl font-semibold'
            type="submit"
            onClick={onclick}
        >
            {type}
        </button>
    )
}
