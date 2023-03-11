import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  // Hook (Data or state that can change over time)
  // state management
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // arr[0] variable
  // arr[1] updater function (update the variable)
  // the argument in useState hook is the inital value for selectedIndex
  // to change the value or the state we have a function or updater function that updated the value of the variable
  return (
    <>
      <h1>{heading}</h1>
      {!items.length && <p>No Items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
