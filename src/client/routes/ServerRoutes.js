import React from "react";
import Layout from "../containers/Layout/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/aboutus",
    component: AboutUs,
  },
];

export default routes;
