import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { ThemeProvider } from "@material-tailwind/react";
import AdminLogin from "./Components/Pages/Login/AdminLogin";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Pages/Home/Home";
import UserLogin from "./Components/Pages/Login/UserLogin";
import UserSignUp from "./Components/Pages/Login/UserSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/userLogin",
        element: <UserLogin/>
      },
      {
        path: "/userSignup",
        element: <UserSignUp/>
      },
      {
        path: "/adminLogin",
        element: <AdminLogin/>
      },
      {
        path: "/dp",
        element: <AdminPanel/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
