import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     exact: true,
//     element: <App />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
//   {
//     path: "*",
//     element: <div>An error occured</div>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <RouterProvider router={router} > */}
    <App />
    {/* </RouterProvider> */}
  </>
);
