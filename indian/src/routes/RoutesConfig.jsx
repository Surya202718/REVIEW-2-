import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Culture from "../pages/Culture";
import Monuments from "../pages/Monuments";
import Tours from "../pages/Tours";
import Learning from "../pages/Learning";
import Discussions from "../pages/Discussions";
import SignIn from "../pages/SignIn";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/monuments" element={<Monuments />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/discussions" element={<Discussions />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default RoutesConfig;
