import React from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import data from "../db.json";
import Style from "../Styles/Statement.module.css";

const Statement = () => {
  const { date } = useParams();
  const [date1, date2] = date.split("_");
  let filteredData = data.filter((el) => {
    return Date.parse(el.date) >= date1 && Date.parse(el.date) <= date2;
  });

  let startMonth = new Date(+date1).toLocaleDateString("en-us", {
    month: "short",
  });
  let endMonth = new Date(+date2).toLocaleDateString("en-us", {
    month: "short",
  });

  return (
    <div className={Style.statement}>
      <Navbar text="My Card - Statement" />
      <div>
        <h4>{`15 ${startMonth} - 14 ${endMonth}`}</h4>
        {filteredData.map((el) => {
          return (
            <div key={el.date} className={Style.card}>
              <div>
                <div>
                  <img src={el.image} alt={el.company} />
                </div>
                <div>
                  <h4>{el.company}</h4>
                  <p>{`${el.date.split("-")[2]}-${new Date(
                    el.date.split("-")[1]
                  ).toLocaleString("en-us", { month: "short" })}-${
                    el.date.split("-")[0]
                  }`}</p>
                </div>
              </div>
              <p>
                {el.type === "credit"
                  ? `+₹${el.amount}.00`
                  : `-₹${el.amount}.00`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Statement;
