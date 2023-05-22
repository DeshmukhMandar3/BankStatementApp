import React from "react";
import { Routes, Route } from "react-router-dom";
import Summary from "../Pages/Summary";
import Statement from "../Pages/Statement";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="/Statement/:date" element={<Statement />} />
    </Routes>
  );
};

export default AllRoutes;
