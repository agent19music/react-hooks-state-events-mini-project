import React from "react";

function Task({name, categories, onDelete}) {

  return (
    <div className="task">
      <div className="label">{categories}</div>
      <div className="text">{name}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;
