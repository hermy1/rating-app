import { useState } from "react";
import Button from "./shared/Button";
import Rating from "./Rating";
function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");
  const [rating, setRating] = useState();

  const grabText = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMsg("Text must be more than 10 chars");
      setBtnDisabled(true);
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newObject = {
        text:text,
        rating:rating
      }
      handleAdd(newObject);

    }
    // setText(" ");
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className="flex flex-col mt-4 mb-4">
        <li className="border-gray-400 flex flex-row mb-2 mt-2">
          <div className="shadow border select-none cursor-pointer bg-red dark:bg-grey-900 rounded-md flex flex-1 items-center p-4">
            <div className="flex-1">
              <div className="text-grey-900 dark:text-white-900 text-sm">
                <h1 className="font-bold text-ml text-center">
                  How would you rate your service with us?
                </h1>

                <div className="m-3 items-center">
                  <Rating select={(rating) => setRating(rating)} />
                </div>
                <div className="mb-4 mt-2">
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Write your review"
                    onChange={grabText}
                  />
                  {msg && <p className="text-red-400 text-center">{msg}</p>}
                  <Button isDisabled={btnDisabled} type="submit">
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </form>
  );
}

export default FeedbackForm;
