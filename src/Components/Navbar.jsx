import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Style from "../Styles/Navbar.module.css";

const Navbar = ({ text }) => {
  return (
    <div className={Style.navbar}>
      <p>
        <MdArrowBackIosNew />
      </p>
      <p>{text}</p>
    </div>
  );
};

export default Navbar;
