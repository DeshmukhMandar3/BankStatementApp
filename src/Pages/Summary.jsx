import React from "react";
import Navbar from "../Components/Navbar";
import Dropdown from "../Components/Dropdown";
import Style from "../Styles/Summary.module.css";

const Summary = () => {
  let Year = [2019, 2020, 2021, 2022];
  let Month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, setYear] = React.useState("");
  const [month, setMonth] = React.useState("");

  return (
    <div className={Style.summary}>
      <Navbar text="Summary" />
      <div className={Style.select_month_year}>
        <div>
          <Dropdown options={Month} func={setMonth} />
          <Dropdown options={Year} func={setYear} />
        </div>
        <button>View Statement Summary</button>
      </div>
    </div>
  );
};

export default Summary;
