function FeedbackForm() {
  return (
    <form>
      <ul className="flex flex-col mt-4 mb-4">
        <li className="border-gray-400 flex flex-row mb-2 mt-2">
          <div className="shadow border select-none cursor-pointer bg-red dark:bg-grey-900 rounded-md flex flex-1 items-center p-4">
            <div className="flex-1">
              <div className="text-grey-900 dark:text-white-900 text-sm">
                <h1 className="font-bold text-ml text-center">
                  How would you rate your service with us?
                </h1>
                <div className="mb-4 mt-2">
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Write your review"
                  />
                  <button
                    className=" bg-indigo-600 hover:bg-indigo-700 text-white text-center text-base focus:outline-none font-semibold shadow-md py-2 px-4 mt-3  rounded"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div>
        {/* <button
          type="button"
          className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          //   onClick={changeFields}
        >
          Update
        </button> */}
      </div>
    </form>
  );
}

export default FeedbackForm;
