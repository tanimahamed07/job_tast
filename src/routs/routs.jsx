import React from "react";

import Root from "../layouts/root";
import Dashboard from "../layouts/dashboard";

import { createBrowserRouter } from "react-router";
import Overview from "../page/dashboard/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true, // এটি মানে হলো /dashboard পাথে গেলেই Overview দেখাবে
        element: <Overview />,
      },
    ],
  },
]);