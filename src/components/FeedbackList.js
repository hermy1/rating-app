import { useState } from "react";
import FeedbackOne from "./FeedbackOne";
import Pagination from "./Pagination";
function FeedbackList({ feedback, removeItems }) {
  
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
 

  const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(feedback.length / itemsPerPage); i++) {
        pageNumbers.push(i);
        // console.log(pageNumbers)
    }
 
  const getNext = ()=>{
          setCurrentPage(currentPage + 3);
          setItemsPerPage(itemsPerPage + 3)
          console.log('clicked', currentPage ,itemsPerPage)

  }
  const getPrevious = () => {
    setCurrentPage(currentPage - 3);
    setItemsPerPage(itemsPerPage -3)
    console.log('clicked', currentPage ,itemsPerPage)
  }

  if (feedback.length === 0)
    return (
      <div className="text-center mt-4 text-2xl">No rating feedback... :/</div>
    );

  return (
    <div>
      {feedback.slice(currentPage,itemsPerPage).reverse().map((item, index) => ( //TODO: stopped here
        <FeedbackOne
          key={item.id}
          rate={item.rate}
          comment={item.comment}
          id={item.id}
          time={item.time}
          removeItem={removeItems}
        />
      ))}
      <div className="flex flex-row justify-center">
         <Pagination itemsPerPage={itemsPerPage} totalItems={feedback.length} paginate={pageNumbers} getNext={getNext} getPrevious={getPrevious}/>      
        </div>
    </div>
  );
}

export default FeedbackList;
