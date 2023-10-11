import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/main.sass";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages-routes
import Home from "./routes/Home.jsx";
import Destination from "./routes/Destination.jsx";
import Crew from "./routes/Crew.jsx";
import Technology from "./routes/Technology.jsx";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/destination", element: <Destination /> },
      { path: "/crew", element: <Crew /> },
      { path: "/technology", element: <Technology /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
