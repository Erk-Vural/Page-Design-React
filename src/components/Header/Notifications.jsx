import React from "react";
import Menu from "./Menu";

function Notifications() {
  return (
    <div className="Notifications">
      <Menu
        src="../Header/notifications.png"
        options={[
          { value: "one", label: "one" },
          { value: "two", label: "two" },
        ]}
      />
    </div>
  );
}

export default Notifications;
