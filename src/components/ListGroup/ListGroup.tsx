import { useState } from "react";
// import "./ListGroup.css";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;

  // onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {!items.length && <p>No Items found</p>}
      <ul className="listGroup container">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              // onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
