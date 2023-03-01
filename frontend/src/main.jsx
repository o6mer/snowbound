import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./general/error-page";
import UserContextProvider from "./contexts/UserContextProvider";
import SearchPage from "./search/SearchPage";
import ComparePage from "./compare/ComparePage";
import ResortPage from "./resort/ResortPage";
import AdminPage from "./admin/AdminPage";
import LoginPage from "./userAuth/LoginPage";
import SignupPage from "./userAuth/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search/:query",
    element: <SearchPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/compare/:query",
    element: <ComparePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resort/:name",
    element: <ResortPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
