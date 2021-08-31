import React, { useState } from "react";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Popover } from "react-tiny-popover";

function Menu(props) {
  const options = props.options;
  const defaultOption = options[0].value;
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [title, setTitle] = useState(defaultOption);

  const checkTitle = (e) => {
    if (props.title === ":") {
      setTitle(props.title);
      console.log(title);
    } else {
      setTitle(e.value);
    }
  };

  const getTitle = () => {
    if (props.title === ":") {
      return (<img src="../List/item-btn.png" alt="item_btn"></img>);
    } else {
      return title;
    }
  };

  const handleSelect = (e) => {
    console.log(e.value);
    checkTitle(e);
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="Menu">
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
          {getTitle()}
        </button>
      </Popover>
    </div>
  );
}

export default Menu;
