import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom"; 
import Root from "../layouts/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
]);