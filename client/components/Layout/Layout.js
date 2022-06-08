import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Navbar from "../Navbar";
import Footer from "../Footer";

import "./Layout.scss";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // if we were redirected from logged out routing, navigate back to that page
    const from = location.state?.from?.pathname;
    if (from) {
      navigate(from, { replace: true });
    }
  }, []);

  return (
    <div className="layout">
      <div className="layout-main">
        <Navbar />
        <div className="layout-body">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
