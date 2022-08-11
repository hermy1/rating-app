import { useState } from "react";

function FeedbackOne({ rate, comment }) {
  // const [rate, setRate] = useState(3);
  // const [comment, setComment] = useState("default");

  // const com = ['This is great','It doesnt work','Thanks so much']

  // const changeFields = () => {
  //   setRate((prev) => {
  //     return prev + 1;
  //   });
  //   setComment(com[Math.floor((Math.random()*com.length))])
  // };
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
                {/* This is my example comment after the rating */}
                {comment}
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-200 text-xs">
              6:00 AM
            </div>
          </div>
        </li>
      </ul>
      {/* <div>
        <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          onClick={changeFields}
        >
          Update
        </button>
      </div> */}
    </div>
  );
}

export default FeedbackOne;
