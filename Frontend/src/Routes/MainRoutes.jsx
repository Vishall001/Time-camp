import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Mainnav from "../Components/Mainnav";
import { Signup } from "../Components/Signup";
import Homepage from "../Pages/Home/Homepage";
import { Price } from "../Pages/Pricing/Price";
import ProjectcontextProvider from "../Context/ProjectContext";
import Addprojects from "../Pages/Project/Addprojects";
import { Timestamp } from "../Pages/Timestamp/Timestamp";
import Layout from "../Components/HOC/Layout";
import Tags from "../Pages/Tag/Tags";
import Integrations from "../Components/Integration/Integration";
import Features from "../Pages/Features";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/features"
        element={
          <Layout>
            <Features />
          </Layout>
        }
      />
      <Route
        path="/integration"
        element={
          <Layout>
            <Integrations />
          </Layout>
        }
      />
      <Route
        path="/price"
        element={
          <Layout>
            <Price />
          </Layout>
        }
      />
      <Route path="/timestamp" element={<Timestamp />} />
      <Route path="/tags" element={<Tags />} />
      <Route
        path="/project"
        element={
          <ProjectcontextProvider>
            <Addprojects />
          </ProjectcontextProvider>
        }
      />
    </Routes>
  );
};
export default MainRoutes;
