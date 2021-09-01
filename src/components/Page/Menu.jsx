import React, { useState } from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Popover } from "react-tiny-popover";

function Menu(props) {
  const options = props.options;
  const defaultOption = options[0];
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [title, setTitle] = useState(defaultOption.value);

  const handleSelect = (e) => {
    console.log(e.value);
    setTitle(e.value);
    setIsPopoverOpen(!isPopoverOpen);
  };

  const popover = (
    <Popover
      isOpen={isPopoverOpen}
      positions={["bottom", "right", "top", "left"]}
      padding={10}
      content={
        <Dropdown
          options={options}
          onChange={handleSelect}
          value={defaultOption}
        />
      }
    >
      <button
        className="itemBtn"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        {title}
        <img src="../List/Options/down.png" alt="down"></img>
      </button>
    </Popover>
  );

  return popover;
}

export default Menu;
