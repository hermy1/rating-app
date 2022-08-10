import FeedbackOne from "./components/FeedbackOne";
import Header from "./components/header";
function App() {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between"></div>
        <div className="mt-2">
          {/* <span className=" text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
            Student Rating
          </span> */}
          <div className="card dark:text-white">
            {/* {comments.map((comment, index) => (
              <li key={comment.id}>{comment.text}</li>
            ))} */}
            <Header text={'Student Rating'}/>
            <FeedbackOne />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
