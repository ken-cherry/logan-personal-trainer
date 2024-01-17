import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Error, Landing, Layout, Newsletter } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "pricing",
        element: <h2>Pricing</h2>,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
