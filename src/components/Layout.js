import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import { Outlet  } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Slider />
      <Header />
      <main>{children}</main>
      <Outlet />
    </>
  );
}

export default Layout;