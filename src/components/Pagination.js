import React from "react";

function Pagination({ getNext, getPrevious, isDisabled, prev, currentPage }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      <button
        className=" bg-indigo-600 hover:bg-indigo-700 text-white text-center text-base focus:outline-none font-semibold shadow-md py-2  px-4 mt-2 rounded disabled:opacity-50"
        disabled={prev}
        onClick={() => {
          getPrevious();
        }}
      >
        Prev
      </button>
      <div className="text-center font-medium text-red-300 mt-3">
        <p>{currentPage / 3 + 1}</p>
      </div>
      <button
        className=" bg-indigo-600 hover:bg-indigo-700 text-white text-center text-base focus:outline-none font-semibold shadow-md py-2 px-4 mt-2 rounded disabled:opacity-50"
        disabled={isDisabled}
        onClick={() => {
          getNext();
        }}
      >
        {" "}
        Next
      </button>
    </div>
  );
}

export default Pagination;
