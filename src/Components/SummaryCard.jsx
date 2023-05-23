import React from "react";
import data from "../db.json";
const SummaryCard = ({ year, month }) => {
  let date1 = "";
  let date2 = "";
  switch (month) {
    case "January": {
      date1 = `${year}-01-15`;
      date2 = `${year}-02-14`;
      break;
    }
    case "February": {
      date1 = `${year}-02-15`;
      date2 = `${year}-03-14`;
      break;
    }
    case "March": {
      date1 = `${year}-03-15`;
      date2 = `${year}-04-14`;
      break;
    }
    case "April": {
      date1 = `${year}-04-15`;
      date2 = `${year}-05-14`;
      break;
    }
    case "May": {
      date1 = `${year}-05-15`;
      date2 = `${year}-06-14`;
      break;
    }
    case "June": {
      date1 = `${year}-06-15`;
      date2 = `${year}-07-14`;
      break;
    }
    case "July": {
      date1 = `${year}-07-15`;
      date2 = `${year}-08-14`;
      break;
    }
    case "August": {
      date1 = `${year}-08-15`;
      date2 = `${year}-09-14`;
      break;
    }
    case "September": {
      date1 = `${year}-09-15`;
      date2 = `${year}-10-14`;
      break;
    }
    case "October": {
      date1 = `${year}-10-15`;
      date2 = `${year}-11-14`;
      break;
    }
    case "November": {
      date1 = `${year}-11-15`;
      date2 = `${year}-12-14`;
      break;
    }
    case "December": {
      date1 = `${year}-12-15`;
      date2 = `${`${+year + 1}`}-01-14`;
      break;
    }
    default:
      break;
  }
  date1 = Date.parse(date1);
  date2 = Date.parse(date2);

  let filteredData = data.filter((el) => {
    return Date.parse(el.date) >= date1 && Date.parse(el.date) <= date2;
  });
  console.log(filteredData);
  return <div>SummaryCard</div>;
};

export default SummaryCard;
