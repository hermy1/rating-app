import { useState } from "react";
import RatingData from "./data/RatingData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
// import About from "./pages/About";
function App() {
  const [rate, setRate] = useState(RatingData);

  const addItem = (newObjects) => {
    newObjects.id = uuidv4();
    // console.log(newObjects);
    setRate([newObjects, ...rate]);
    // setRate(rate => [...newObject, rate])
    // console.log(rate);
  };
  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setRate(rate.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between"></div>
        <div className="mt-2">
          <div className="card dark:text-white">
            <Header text={"Student Rating"} />
            <FeedbackForm handleAdd={addItem} />
            <FeedbackStats feedback={rate} />
            {console.log(rate)}
            <FeedbackList feedback={rate} removeItems={removeItem} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
