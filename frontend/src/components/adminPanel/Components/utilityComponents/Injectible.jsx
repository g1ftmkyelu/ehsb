import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const CustomModal = ({ isOpen, onClose, children, isFullScreen }) => {
  const [modalStyle, setModalStyle] = useState({
    display: 'none',
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  });

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    overflow: 'auto',
  };

  useEffect(() => {
    setModalStyle({
      ...modalStyle,
      display: isOpen ? 'block' : 'none',
    });
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div style={modalStyle} onClick={onClose}>
          <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
            <button   className="px-4 py-2 bg-green-600 text-white flex items-center justify-center rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" onClick={onClose} style={{ position: 'absolute', top: '10px', left: '10px' }}>
              <FaArrowAltCircleLeft/>
              {isFullScreen ? 'Back' : 'Close'}
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
const Injectible = ({ component, buttonCaption, ButtonIcon, isFullScreen }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openMyModal = () => {
    setModalOpen(true);
  };

  const closeMyModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-green-600 text-white flex items-center justify-center rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        onClick={openMyModal}
      >
        <ButtonIcon className="w-5 h-5 mr-2" /> {/* Assuming ButtonIcon is an SVG icon */}
        {buttonCaption}
      </button>

      <CustomModal isOpen={modalOpen} onClose={closeMyModal} isFullScreen={true}>
        <div className='mt-28'></div>
        {component}
      </CustomModal>
    </div>
  );
};

export default Injectible;
