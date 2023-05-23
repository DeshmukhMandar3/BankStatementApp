import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import date from "../db.json";

const Statement = () => {
  const { date } = useParams();
  const [date1, date2] = date.split("-");

  return (
    <div>
      <Navbar text="My Card - Statement" />
    </div>
  );
};

export default Statement;
