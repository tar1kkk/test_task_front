'use client';
import React, {useEffect} from 'react';
import Search from "@/app/components/Search";
import SwitchTheme from "@/app/components/SwitchTheme";
import SelectMenu from "@/app/components/SelectMenu";
import Loader from "@/app/components/Loader";
import {useProducts} from "@/app/hooks/useProducts";
import ProductsTable from "@/app/components/ProductsTable";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "@/app/components/Pagination";
import {setTotalPage} from "@/app/redux/slice/getProductsSlice";
function Home() {
    const {status,filteredProducts} = useProducts();
    const dispatch = useDispatch();
    const {currentPage,itemsPerPage,searchWord,totalPages } = useSelector(state => state.getProductsSlice);



    useEffect(() => {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        dispatch(setTotalPage(totalPages));
    }, [filteredProducts, itemsPerPage, dispatch]);

    if (status !== 'success') {
        return <Loader/>
    }

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div>
            <div className='flex items-center justify-between'>
                <SelectMenu dispatch={dispatch} itemsPerPage={itemsPerPage}/>
                <Search searchWord={searchWord} dispatch={dispatch}/>
                <SwitchTheme />
            </div>
            <ProductsTable filteredProducts={currentProducts}  dispatch={dispatch} />
            <Pagination currentPage={currentPage} dispatch={dispatch} totalPages={totalPages}/>
        </div>
    );
}

export default Home;
