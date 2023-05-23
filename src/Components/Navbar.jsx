import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Style from "../Styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ text }) => {
  const navigate = useNavigate();
  function handleClick() {
    if (text === "My Card - Statement") {
      navigate("/");
    }
  }
  return (
    <div className={Style.navbar}>
      <p onClick={handleClick}>
        <MdArrowBackIosNew />
      </p>
      <p>{text}</p>
    </div>
  );
};

export default Navbar;
