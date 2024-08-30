import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    filteredProducts: [],
    status: null,
    searchWord: '',
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 0,
    theme: typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light',
};


export const getData = createAsyncThunk('product/getData', async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/data');
        return response.data.posts;
    } catch (error) {
        throw error;
    }
});

const getProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        removeProduct(state, action) {
            state.products = state.products.filter((item) => item['Tracking ID'] !== action.payload['Tracking ID']);
            state.filteredProducts = state.filteredProducts.filter((item) => item['Tracking ID'] !== action.payload['Tracking ID']);
        },
        setSearchWord(state, action) {
            state.searchWord = action.payload;
            state.filteredProducts = state.products.filter((item) =>
                item['Product Name'].toLowerCase().includes(state.searchWord.toLowerCase())
            );
        },
        setWord(state, action) {
            state.searchWord = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setTotalPage(state, action) {
            state.totalPages = action.payload;
        },
        setItemsPerPage(state, action) {
            state.itemsPerPage = action.payload;
            state.totalPages = Math.ceil(state.filteredProducts.length / state.itemsPerPage);
            state.currentPage = 1;
        },
        setChangeTheme(state, action) {
            state.theme = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', action.payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.status = 'loading';
            state.products = [];
            state.filteredProducts = [];
        });
        builder.addCase(getData.fulfilled, (state, action) => {
            state.status = 'success';
            state.products = action.payload;
            state.filteredProducts = action.payload;
        });
        builder.addCase(getData.rejected, (state) => {
            state.status = 'error';
            state.products = [];
            state.filteredProducts = [];
        });
    }
});

export const {
    removeProduct,
    setChangeTheme,
    setCurrentPage,
    setItemsPerPage,
    setWord,
    setSearchWord,
    setTotalPage,
} = getProductsSlice.actions;
export default getProductsSlice.reducer;
