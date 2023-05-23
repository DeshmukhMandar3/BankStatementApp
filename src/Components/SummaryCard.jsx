import React, { useState } from "react";
import data from "../db.json";
import Style from "../Styles/SummaryCard.module.css";
import { useNavigate } from "react-router-dom";

const SummaryCard = ({ year, month }) => {
  let date1 = "";
  let date2 = "";
  let deb = 0;
  let cred = 0;
  let minDeb = Infinity;
  let showDate = "";

  const navigate = useNavigate();

  switch (month) {
    case "January": {
      date1 = `${year}-01-15`;
      date2 = `${year}-02-14`;
      showDate = "15 Jan - 14 Feb";
      break;
    }
    case "February": {
      date1 = `${year}-02-15`;
      date2 = `${year}-03-14`;
      showDate = "15 Feb - 14 Mar";
      break;
    }
    case "March": {
      date1 = `${year}-03-15`;
      date2 = `${year}-04-14`;
      showDate = "15 Mar - 14 Apr";
      break;
    }
    case "April": {
      date1 = `${year}-04-15`;
      date2 = `${year}-05-14`;
      showDate = "15 Apr - 14 May";
      break;
    }
    case "May": {
      date1 = `${year}-05-15`;
      date2 = `${year}-06-14`;
      showDate = "15 May - 14 June";
      break;
    }
    case "June": {
      date1 = `${year}-06-15`;
      date2 = `${year}-07-14`;
      showDate = "15 June - 14 July";
      break;
    }
    case "July": {
      date1 = `${year}-07-15`;
      date2 = `${year}-08-14`;
      showDate = "15 July - 14 Aug";
      break;
    }
    case "August": {
      date1 = `${year}-08-15`;
      date2 = `${year}-09-14`;
      showDate = "15 Aug - 14 Sept";
      break;
    }
    case "September": {
      date1 = `${year}-09-15`;
      date2 = `${year}-10-14`;
      showDate = "15 Sept - 14 Oct";
      break;
    }
    case "October": {
      date1 = `${year}-10-15`;
      date2 = `${year}-11-14`;
      showDate = "15 Oct - 14 Nov";
      break;
    }
    case "November": {
      date1 = `${year}-11-15`;
      date2 = `${year}-12-14`;
      showDate = "15 Nov - 14 Dec";
      break;
    }
    case "December": {
      date1 = `${year}-12-15`;
      date2 = `${`${+year + 1}`}-01-14`;
      showDate = "15 Dec - 14 Jan";
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

  filteredData.forEach((el) => {
    if (el.type === "debit") {
      deb += +el.amount;
      if (deb < minDeb) {
        minDeb = deb;
      }
    } else if (el.type === "credit") {
      cred += el.amount;
    }
  });

  return (
    <div className={Style.summaryCard}>
      <h4>{showDate}</h4>
      <h4>Summary</h4>
      <div>
        <p>Opening Balance</p> <p>₹0.00</p>
      </div>
      <div>
        <p>Payment</p> <span>-</span> <p>₹0.00</p>
      </div>
      <div>
        <p>Refund/Credits</p> <span>-</span> <p>{`₹${cred}.00`}</p>
      </div>
      <div>
        <p>Purchase/Debits</p> <span>+</span> <p>{`₹${deb}.00`}</p>
      </div>
      <div>
        <p>Cashback</p> <span>-</span> <p>₹0.00</p>
      </div>
      <hr />
      <div>
        <h3>TOTAL AMOUNT DUE</h3>
        <h3>{`₹${deb}.00`}</h3>
      </div>
      <div>
        <p>MIN. AMOUNT DUE</p>{" "}
        <p>{minDeb == Infinity ? "₹0.00" : `₹${minDeb}.00`}</p>
      </div>
      <h4
        onClick={() => {
          navigate(`/Statement/${date1}-${date2}`);
        }}
      >
        View Statement Transactions {`>`}
      </h4>
    </div>
  );
};

export default SummaryCard;
