import React, { useState } from "react";

function List(props) {
  const [colo, setColo] = useState();
  const [line, setLine] = useState(true);

  function changeColor() {
    setLine(!line);
    setColo(line ? "line-Through" : "none");
  }

  return (
    <li style={{ textDecoration: colo }} onClick={changeColor}>
      {props.todoItem}
    </li>
  );
}

export default List;
