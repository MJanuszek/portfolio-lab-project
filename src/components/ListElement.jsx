import React, { useState } from "react";

function ListElement({ name, description }) {
  return (
    <div className="list-element">
      <h2 className="element-title">{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ListElement;
