import { useEffect, useState } from "react";
import FeedbackOne from "./FeedbackOne";
import Pagination from "./Pagination";
function FeedbackList({ feedback, removeItems }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isDisabled, setIsDisabled] = useState(false);
  const [prev, setPrev] = useState(false);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(feedback.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  //disable buttons
  useEffect(() => {
    //disable prev if current page is 0
    if (currentPage === 0) {
      setPrev(true);
    } else {
      setPrev(false);
    }
    //disable next if current page is last page
    if (pageNumbers.length < 2) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [currentPage, pageNumbers.length]);

  const getNext = () => {
    setCurrentPage(currentPage + 3);
    setItemsPerPage(itemsPerPage + 3);
  };

  const getPrevious = () => {
    setCurrentPage(currentPage - 3);
    setItemsPerPage(itemsPerPage - 3);
  };

  if (feedback.length === 0)
    return (
      <div className="text-center mt-4 text-2xl">No rating feedback... :/</div>
    );

  return (
    <div>
      {feedback
        .slice(currentPage, itemsPerPage)
        .reverse()
        .map(
          (
            item,
            index //TODO: stopped here
          ) => (
            <FeedbackOne
              key={item.id}
              rate={item.rate}
              comment={item.comment}
              id={item.id}
              time={item.time}
              removeItem={removeItems}
            />
          )
        )}
      <div className="flex flex-row justify-center p-4">
        <Pagination
          totalItems={feedback.length}
          getNext={getNext}
          getPrevious={getPrevious}
          isDisabled={isDisabled}
          prev={prev}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default FeedbackList;
