"use client";

import React, {useState, useEffect, useCallback} from 'react';
import {setSearchWord, setWord} from "@/app/redux/slice/getProductsSlice";
import debounce from 'lodash.debounce';

function SearchInput({searchWord,dispatch}) {
    const [theme, setTheme] = useState('light');

    const debouncedDispatch = useCallback(
        debounce((value) => {
            dispatch(setSearchWord(value));
        }, 500),
        [dispatch]
    );

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, [theme]);

    const handleChange = (event) => {
        dispatch(setWord(event.target.value));
        debouncedDispatch(event.target.value);
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={searchWord}
                onChange={handleChange}
                placeholder="Поиск..."
                className={`w-[300px] px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
                    theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
                }`}
            />

        </div>
    );
}

export default SearchInput;
