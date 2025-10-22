import React, { Suspense } from "react";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ToastContainer } from "react-toastify";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Apps from "../Pages/Apps/Apps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/app/:id",
        loader: () => fetch("../Apps.json"),
        Component: AppDetails,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
