import React from "react";
import { createBrowserRouter } from "react-router";

import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/auth/Login";
import Overview from "../pages/dashboard/Overview";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Overview />,
      },
    ],
  },
]);