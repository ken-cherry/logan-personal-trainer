import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Error, Landing, Layout } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/about",
    element: <About />,
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
