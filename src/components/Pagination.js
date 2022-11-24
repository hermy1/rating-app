import React from "react";

function Pagination({ itemsPerPage, totalItems, paginate, getNext,getPrevious }) {
    
    return (
        <div className="">
        <p>{itemsPerPage}</p>

        <p>{totalItems} tt items</p>
       
        <button className="bg-blue-500 px-4 rounded py-1 mr-1" onClick={()=>{getPrevious()}}>Prev</button>
        <p>{paginate} paginate</p>
        <button className="bg-blue-500 px-4 rounded py-1" onClick={()=>{getNext()}}> Next</button>
        </div>
    );
}

export default Pagination;