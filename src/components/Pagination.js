import React from "react";

function Pagination({
  getNext,
  getPrevious,
  isDisabled,
  prev,
  currentPage,
}) {

  return (
    <div className="grid grid-cols-3 gap-2">
      <button
        className="bg-blue-500 px-4 rounded py-1 mr-1 disabled:bg-red-400"
        disabled={prev}
        onClick={() => {
          getPrevious();
        }}
      >
        Prev
      </button>
      <div className="text-center font-medium text-red-300 mt-2">
        <p>{currentPage / 3 + 1}</p>
      </div>
      <button
        className="bg-blue-500 px-4 rounded py-1 disabled:bg-red-400"
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
