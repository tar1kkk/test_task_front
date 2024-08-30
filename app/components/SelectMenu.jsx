'use client';

import React from 'react';
import {setItemsPerPage} from "@/app/redux/slice/getProductsSlice";

function SelectMenu({dispatch,itemsPerPage}) {

    const handleChange = (event) => {
        dispatch(setItemsPerPage(event.target.value));
    };

    return (
        <div className="relative mt-2 flex items-center">
            <div>Show</div>
            <select
                value={itemsPerPage}
                onChange={handleChange}
                className="block w-full px-2 py-1 border rounded-lg bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white dark:border-gray-700 ml-2 mr-2"
            >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>
            <div>entries</div>
        </div>
    );
}

export default SelectMenu;
