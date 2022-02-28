import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/exCounterSlices";
import logger from "redux-logger";

const createMiddleware = () => {
  const middlewareArray = [];
  if (process.env.NODE_ENV === "development") {
    middlewareArray.push(logger);
  }

  return middlewareArray;
};

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: () => createMiddleware(),
});
