import React, { Suspense } from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Loading from "../components/Loading/Loading";

const Roots = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<Loading></Loading>}>
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
