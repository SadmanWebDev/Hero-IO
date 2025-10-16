import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router/dom";
import { ToastContainer } from "react-toastify";
import { router } from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<span>Loading.......</span>}>
      <RouterProvider router={router} />
    </Suspense>

    <ToastContainer></ToastContainer>
  </StrictMode>
);
