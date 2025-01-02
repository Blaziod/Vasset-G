/* eslint-disable react/prop-types */
import React from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "./mainHeader";
import Footer from "./footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // List of routes that don't require the header
  const authRoutes = ["/auth", "/signup", "/forgot-password", "/verify", ""];
  const footerRoutes = ["/auth"];
  // Check if the current route is an auth route
  const isAuthPage = authRoutes.includes(location.pathname);
  const isFooterPage = footerRoutes.includes(location.pathname);
  return (
    <div>
      {!isAuthPage && <MainHeader />}
      <main>{children}</main>
      {!isFooterPage && <Footer />}
    </div>
  );
};

export default Layout;
