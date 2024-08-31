import React, {useEffect} from 'react';
import {FaRegTrashAlt} from "react-icons/fa";
import {removeProduct} from "@/app/redux/slice/getProductsSlice";
import {useDispatch} from "react-redux";
import StatusBadge from "@/app/components/StatusColor";
import Image from "next/image";

function ProductsTable({filteredProducts, dispatch,theme}) {

    const tableClassName = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
    const headerClassName = theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-600';
    const rowClassName = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';


    return (
        <div className="overflow-x-auto pt-5">
            <table className={`min-w-full border ${tableClassName}`}>
                <thead>
                <tr className={`border-b ${headerClassName}`}>
                    <th className="px-4 py-2 text-left text-sm font-medium">Tracking ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Product</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Customer</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Amount</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Payment Mode</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((item) => (
                    <tr key={item["Tracking ID"]} className={`border-b ${rowClassName}`}>
                        <td className="px-4 py-2 text-sm">#{item["Tracking ID"]}</td>
                        <td className="px-4 py-2 text-sm flex items-center">
                            <Image
                                height={40}
                                width={40}
                                src={item["Product Image"]}
                                alt={item["Product Name"]}
                                className="w-10 h-10 object-cover rounded"
                            />
                            <span className="ml-2">{item["Product Name"]}</span>
                        </td>
                        <td className="px-4 py-2 text-sm">{item["Customer"]}</td>
                        <td className="px-4 py-2 text-sm">{item["Date"]}</td>
                        <td className="px-4 py-2 text-sm">${item["Amount"]}</td>
                        <td className="px-4 py-2 text-sm">{item["Payment Mode"]}</td>
                        <td className="px-4 py-2 text-sm"><StatusBadge status={item['Status']} /></td>
                        <td className="px-4 py-2 text-sm">
                            <FaRegTrashAlt
                                onClick={() => dispatch(removeProduct(item))}
                                className="cursor-pointer text-red-500 h-4 w-4"
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsTable;