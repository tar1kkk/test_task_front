import React from 'react';
import { Triangle } from 'react-loader-spinner';

function Loader() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Triangle
                visible={true}
                height="150"
                width="150"
                color="red"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}

export default Loader;
