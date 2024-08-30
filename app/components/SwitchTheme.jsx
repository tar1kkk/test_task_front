"use client";

import React, {useEffect} from 'react';
import { setChangeTheme } from "@/app/redux/slice/getProductsSlice";

const themes = {
    light: 'bg-white text-black',
    dark: 'bg-gray-900 text-white',
};

function SwitchTheme({dispatch,theme}) {

    useEffect(() => {
        document.body.className = themes[theme];
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setChangeTheme(newTheme));
    };

    return (
        <div>
            <label className="flex items-center cursor-pointer">
                <span className="text-sm font-medium mr-2">
                    {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
                </span>
                <div className="relative">
                    <input
                        type="checkbox"
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                        className="sr-only"
                    />
                    <div className="w-14 h-8 bg-gray-300 rounded-full dark:bg-gray-600 flex items-center">
                        <div
                            className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                                theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                    </div>
                </div>
            </label>
        </div>
    );
}

export default SwitchTheme;
