import React from 'react';
import SalesReport from './SalesReport';

const Report = (rdata) => {
    const { period, salesData } = rdata
    console.log(rdata)
    return (
        <div>
            <SalesReport
                period={period}
                salesData={salesData}
            />
        </div>
    );
}

export default Report;



