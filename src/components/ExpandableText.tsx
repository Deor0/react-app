import { useState } from "react";

interface Props {
  children: string;
  char?: number;
}

const ExpandableText = ({ children, char = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= char) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, char);

  const handelClick = () => {
    setExpanded(!isExpanded);
  };

  return (
    <p>
      {text}
      {isExpanded ? "" : "..."}
      <button onClick={handelClick}>{isExpanded ? "Less" : "More"}</button>
    </p>
  );
};

export default ExpandableText;
