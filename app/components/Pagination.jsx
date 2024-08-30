import React from 'react';
import { setCurrentPage } from '@/app/redux/slice/getProductsSlice';

function Pagination({currentPage,totalPages,dispatch}) {

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            dispatch(setCurrentPage(page));
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        let startPage, endPage;

        if (totalPages <= 3) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage === 1) {
                startPage = 1;
                endPage = 3;
            } else if (currentPage === totalPages) {
                startPage = totalPages - 2;
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-3 py-1 border rounded-md ${
                        currentPage === i ? 'bg-purple-600 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="flex justify-center mt-4 space-x-2">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 border rounded-md ${
                    currentPage === 1 ? 'text-gray-400' : 'text-blue-500 hover:bg-gray-200'
                }`}
            >
                Previous
            </button>
            {renderPageNumbers()}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 border rounded-md ${
                    currentPage === totalPages ? 'text-gray-400' : 'text-blue-500 hover:bg-gray-200'
                }`}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
