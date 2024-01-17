import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Link to="./about">About Page</Link>
    </div>
  );
};

export default Layout;
