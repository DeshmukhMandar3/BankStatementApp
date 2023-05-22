import React from "react";
import Style from "../Styles/Dropdown.module.css";

const Dropdown = ({ options, func }) => {
  return (
    <select onChange={(e) => func(e.target.value)} className={Style.select}>
      {options.map((el) => {
        return (
          <option key={el} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
