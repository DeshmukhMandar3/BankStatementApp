import React from "react";
import Navbar from "../Components/Navbar";
import Dropdown from "../Components/Dropdown";
import Style from "../Styles/Summary.module.css";
import SummaryCard from "../Components/SummaryCard";

const Summary = () => {
  let Year = [2019, 2020, 2021, 2022];
  let Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, setYear] = React.useState("2019");
  const [month, setMonth] = React.useState("January");
  const [altYear, setAltYear] = React.useState("2019");
  const [altMonth, setAltMonth] = React.useState("January");

  return (
    <div className={Style.summary}>
      <Navbar text="My Card - Summary" />
      <div className={Style.select_month_year}>
        <div>
          <Dropdown options={Month} func={setMonth} />
          <Dropdown options={Year} func={setYear} />
        </div>
        <button
          onClick={() => {
            setAltMonth(month);
            setAltYear(year);
          }}
        >
          View Statement Summary
        </button>
      </div>
      <SummaryCard year={altYear} month={altMonth} />
    </div>
  );
};

export default Summary;
