/* eslint-disable react/prop-types */
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./header";

const Layout = ({ children }) => {
  const location = useLocation();

  // List of routes that don't require the header
  const authRoutes = ["/auth", "/signup", "/forgot-password", "/verify"];

  // Check if the current route is an auth route
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div>
      {!isAuthPage && <Header />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
