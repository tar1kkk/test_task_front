import React from 'react';
import {FaRegTrashAlt} from "react-icons/fa";
import {removeProduct} from "@/app/redux/slice/getProductsSlice";
import {useDispatch} from "react-redux";
import StatusBadge from "@/app/components/StatusColor";

function ProductsTable({filteredProducts, dispatch}) {
    return (
        <div className="overflow-x-auto pt-5">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr className="bg-gray-100 border-b">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Tracking ID</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Product</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Customer</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Payment Mode</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Action</th>
                </tr>
                </thead>
                <tbody>
                {filteredProducts.map((item) => (
                    <tr key={item["Tracking ID"]} className="border-b">
                        <td className="px-4 py-2 text-sm text-gray-600">#{item["Tracking ID"]}</td>
                        <td className="px-4 py-2 text-sm text-gray-600 flex items-center">
                            <img src={item["Product Image"]} alt={item["Product Name"]}
                                 className="w-10 h-10 object-cover rounded"/>
                            <td className="px-4 py-2 text-sm text-gray-600">{item["Product Name"]}</td>
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-600">{item["Customer"]}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">{item["Date"]}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">${item["Amount"]}</td>
                        <td className="px-4 py-2 text-sm text-gray-600">{item["Payment Mode"]}</td>
                        <td className="px-4 py-2 text-sm text-gray-600"><StatusBadge status={item['Status']}/></td>
                        <td className="px-4 py-2 text-sm text-gray-600"><FaRegTrashAlt
                            onClick={() => dispatch(removeProduct(item))}
                            className='bg-red cursor-pointer'/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsTable;