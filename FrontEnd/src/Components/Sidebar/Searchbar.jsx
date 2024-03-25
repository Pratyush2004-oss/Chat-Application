import React from 'react'
import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
    return (
        <form className='flex items-center gap-2'>
            <label className="input input-bordered flex rounded-full items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <button >
                <IoSearch className='w-6 h-6 outline-none'/>
                </button>
            </label>
        </form>
    )
}

export default Searchbar