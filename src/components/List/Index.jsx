import React from "react";
import Item from "./Item";
import Options from "./Options/Index";
import list from "../../list";

function List(props) {
    return (
        <div className={props.class}>
            <Options />

            {list.map(listItem => (
                <Item
                    key={listItem.key}
                    icon={listItem.icon}
                    title={listItem.title}
                    description={listItem.description}
                />
            ))}

        </div>
    );
}

export default List;