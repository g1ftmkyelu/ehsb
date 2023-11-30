import React, { forwardRef, useRef } from 'react';
import { FaPrint } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
const MyRepo = forwardRef(({ component }, ref) => {

  return (
    <div ref={ref}>
      {component}
    </div>
  )
});
const Reporter = ({ component }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button className='p-4 m-5 bg-blue-700 font-bold text-white flex items-center justify-center' onClick={handlePrint}>
        <FaPrint /> {'Print'}
      </button>
      <div>
        <MyRepo
          ref={componentRef}
          component={component}

        />
      </div>
    </div>
  );
};
export default Reporter;