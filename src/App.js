import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { v4 as uuidv4 } from "uuid";
import Button from "./components/shared/Button"
import Modal from "./components/shared/Modal";
import axios from "axios";
function App() {
  const [rate, setRate] = useState([]);
  //show and hide modal
  const [showModal,setShowModal] = useState(false);
  
  
  //show modal 
  const showModalHandler = () => {
    setShowModal(true)
  }
  //hide modal
  const hideModalHandler = () => {
    setShowModal(false)
  }
  //add new feedback
const info = "About this App"
  if (rate.length === 0) {
    axios.get("http://localhost:3004/db/rateData").then((response) => {
      setRate(response.data);
    });
  } 
//adding items
  const addItem = (newObjects) => {
    newObjects.id = uuidv4();
    axios
      .post("http://localhost:3004/db/rateData/", newObjects)
      .then((response) => {
        setRate([newObjects, ...rate]);
      })
      .catch((error) => console.log(error));
  };

  //remove items
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
            <FeedbackList feedback={rate} removeItems={removeItem} />
            <Button 
            children={info}
            showModal={showModalHandler}
            />
            <Modal
           showModal={showModal}
           hideModal={hideModalHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
