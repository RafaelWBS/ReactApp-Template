import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slices/exCounterSlices";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center bg-gray-200 mx-12 h-36 w-auto">
      <div className=" flex items-center justify-around">
        {/* Content goes here */}
        <button
          className="px-4 py-2 bg-sky-700 rounded"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement -
        </button>

        <span>{count}</span>
        <button
          className="px-4 py-2 bg-sky-700 rounded"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment +
        </button>
      </div>
    </div>
  );
}
