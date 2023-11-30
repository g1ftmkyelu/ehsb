import React, { useRef } from 'react';
import SalesReport from './SalesReport';
import { useReactToPrint } from 'react-to-print';
import { FaPrint } from 'react-icons/fa';

const Report = ({ rdata }) => {
  const { period, salesData } = rdata;
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button className='p-4 m-5 bg-blue-700 font-bold text-white flex items-center justify-center' onClick={handlePrint}>
        <FaPrint /> {'Print Sales Report'}
      </button>
      <div>
        <SalesReport
          ref={componentRef}
          period={period}
          salesData={salesData}
        />
      </div>
    </div>
  );
};

export default Report;
