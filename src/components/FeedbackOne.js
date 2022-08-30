// import { useState } from "react";
import { FaTimes } from "react-icons/fa";
function FeedbackOne({ rate, comment, time, id, removeItem }) {
  return (
    <div>
      <ul className="flex flex-col mt-4 mb-4">
        <li className="border-gray-400 flex flex-row mb-2 mt-2">
          <div className="shadow border select-none cursor-pointer bg-white dark:bg-blue-900 rounded-md flex flex-1 items-center p-4">
            <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
              <span className="block relative">
                <span className="flex-grow text-right">
                  <button
                    type="button"
                    className="w-10 h-10 text-xs  rounded-full text-white bg-red-500"
                  >
                    <span className="p-1 font-bold">{rate}</span>
                  </button>
                </span>
              </span>
            </div>
            <div className="flex-1 pl-1 md:mr-16">
              <div className="text-gray-600 dark:text-gray-200 text-sm">
                {comment}
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">
              <button className="mr-2 mb-2" onClick={() => removeItem(id)}>
                <FaTimes color="red" />
              </button>
              {time}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

FeedbackOne.defaultProps = {
  time: new Date().toLocaleString(),
};
export default FeedbackOne;
