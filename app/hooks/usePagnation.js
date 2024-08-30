import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {setTotalPage} from "@/app/redux/slice/getProductsSlice";
import {useProducts} from "@/app/hooks/useProducts";

export const usePagnation = () => {
    const dispatch = useDispatch();
    const {currentPage,itemsPerPage} = useSelector(state => state.getProductsSlice);
    const {filteredProducts} = useProducts();


    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


    useEffect(() => {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        dispatch(setTotalPage(totalPages));
    }, [filteredProducts]);

    return {currentProducts};
};
