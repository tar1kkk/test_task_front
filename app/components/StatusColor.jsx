import React from 'react';

function StatusBadge({ status }) {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Cancelled':
                return 'bg-red-200 text-red-800';
            case 'Delivered':
                return 'bg-green-200 text-green-800';
            case 'Process':
                return 'bg-yellow-200 text-yellow-800';
            default:
                return 'bg-gray-200 text-gray-800';
        }
    };

    return (
        <span className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusClass(status)}`}>
            {status}
        </span>
    );
}

export default StatusBadge;
