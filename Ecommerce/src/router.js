import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/Home",
    element: <div>Hello world!</div>,
  },
]);
export default router