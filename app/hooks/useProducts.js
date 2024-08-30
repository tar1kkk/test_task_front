import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "@/app/redux/slice/getProductsSlice";

export const useProducts = () => {
    const dispatch = useDispatch();
    const { products, status ,filteredProducts} = useSelector(state => state.getProductsSlice);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    return { products, status, filteredProducts};
};
