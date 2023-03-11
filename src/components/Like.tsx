import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

function Like({ onClick }: Props) {
  const [clicked, setClicked] = useState(false);

  const toggle = () => {
    setClicked(!clicked);
    onClick();
  };

  if (clicked)
    return <AiFillLike size={"2rem"} color="ff6b81" onClick={toggle} />;
  else {
    return <AiOutlineLike size={"2rem"} onClick={toggle} />;
  }
}

export default Like;
