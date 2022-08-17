import { useState } from "react";
function Rating() {
  const [selected, setSelected] = useState(3);

  const handleChange = (e) => {

    setSelected(+e.target.value)
    console.log(selected)
  };
  return (
    <div>
      <ul className="inline-grid mx-10 p-1 grid-cols-5 gap-3 ">
        <li className="">
          <label
            htmlFor="num1"
            className="mt-2 m-4 absolute z-0 text-red-900 flex p-0 font-bold"
          >
            1
          </label>
          <input
            className="w-10 h-10 text-xs bg-blue-500"
            type="radio"
            name="rating"
            value="1"
            onChange={handleChange}
            checked={selected === 1}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num2"
            className="mt-2 m-4 absolute  text-red-900 flex p-0 font-bold"
          >
            2
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="2"
            onChange={handleChange}
            checked={selected === 2}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num3"
            className="mt-2 m-4 absolute  text-red-900 flex p-0 font-bold"
          >
            3
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="3"
            onChange={handleChange}
            checked={selected === 3}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num4"
            className="mt-2 m-4 absolute  text-red-900 flex p-0 font-bold"
          >
            4
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="4"
            onChange={handleChange}
            checked={selected === 4}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num5"
            className="mt-2 m-4 absolute  text-red-900 flex p-0 font-bold"
          >
            5
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="5"
            onChange={handleChange}
            checked={selected === 5}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num6"
            className="mt-2 m-4 absolute  text-red-900 flex p-0 font-bold"
          >
            6
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="6"
            onChange={handleChange}
            checked={selected === 6}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num7"
            className="mt-2 m-4 absolute  text-red-900 flex p-0 font-bold"
          >
            7
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="7"
            onChange={handleChange}
            checked={selected === 7}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num8"
            className="mt-2 m-4 absolute  text-red-900 flex p-0 font-bold"
          >
            8
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="8"
            onChange={handleChange}
            checked={selected === 8}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num9"
            className="mt-2 m-4 absolute  text-red-900 flex p-0 font-bold"
          >
            9
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="9"
            onChange={handleChange}
            checked={selected === 9}
          />
        </li>
        <li className="div">
          <label
            htmlFor="num10"
            className="mt-2 m-3 absolute  text-red-900 flex p-0 font-bold"
          >
            10
          </label>
          <input
            className="w-10 h-10 text-xs bg-red-500"
            type="radio"
            name="rating"
            value="10"
            onChange={handleChange}
            checked={selected === 10}
          />
        </li>
      </ul>
    </div>
  );
}

export default Rating;
