import React from 'react';

const Button = ({ onClickPrevious, onClickNext, currentPage, totalPages }) => {
    return (
        <div className="flex  justify-center mt-4 p-2  items-center">
            <button
                id="prevButton"
                className={`bg-blue-500 text-white px-4 py-2 mr-4 rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 focus:outline-none focus:bg-blue-600'}`}
                onClick={onClickPrevious}
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            <button
                id="nextButton"
                className={`bg-green-500 text-white px-4 py-2 rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600 focus:outline-none focus:bg-green-600'}`}
                onClick={onClickNext}
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
};

export default Button;
