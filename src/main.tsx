import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Mainpage from "./components/Mainpage.tsx";
import Contact from "./components/Contact.tsx";
import NotFound from "./components/NotFound.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Mainpage />, errorElement: <NotFound /> },
  { path: "/contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
