'use client';
import React,  from 'react';
import Search from "@/app/components/Search";
import SwitchTheme from "@/app/components/SwitchTheme";
import SelectMenu from "@/app/components/SelectMenu";
import Loader from "@/app/components/Loader";
import {useProducts} from "@/app/hooks/useProducts";
import ProductsTable from "@/app/components/ProductsTable";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "@/app/components/Pagination";
import {usePagnation} from "@/app/hooks/usePagnation";


function Home() {
    const {status} = useProducts();
    const {currentProducts} = usePagnation();
    const dispatch = useDispatch();
    const {currentPage,itemsPerPage,searchWord,totalPages,theme } = useSelector(state => state.getProductsSlice);

    if (status !== 'success') {
        return <Loader/>
    }
    return (
        <div>
            <div className='flex items-center justify-between'>
                <SelectMenu dispatch={dispatch} itemsPerPage={itemsPerPage}/>
                <Search searchWord={searchWord} dispatch={dispatch} theme={theme}/>
                <SwitchTheme theme={theme} dispatch={dispatch}/>
            </div>
            <ProductsTable filteredProducts={currentProducts}  dispatch={dispatch} theme={theme} />
            <Pagination currentPage={currentPage} dispatch={dispatch} totalPages={totalPages}/>
        </div>
    );
}

export default Home;
