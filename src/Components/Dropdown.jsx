import React from "react";
import Style from "../Styles/Dropdown.module.css";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = ({ options, func }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);
  return (
    <div>
      <div className={Style.selectTag} onClick={() => setIsOpen(!isOpen)}>
        {isSelected ? `${selected}` : options[0]}
        <span style={{ color: "gray" }}>
          <AiFillCaretDown />
        </span>
      </div>

      <ul
        className={Style.list}
        style={{
          display: isOpen ? "block" : "none",
          height: options.length === 12 ? "200px" : "100px",
        }}
      >
        {options.map((el) => {
          return (
            <li
              key={el}
              onClick={() => {
                setSelected(el);
                setIsSelected(true);
                setIsOpen(!isOpen);
                func(el);
              }}
            >
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
