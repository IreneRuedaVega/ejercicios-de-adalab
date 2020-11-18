import React from "react";

const Card = (props) => {
  return (
    <div>
      <h1>{props.updatedUser.name || "Título de la película"}</h1>
      <p>{props.updatedUser.description || "Descripción de la película"}</p>
      <p>{props.updatedUser.language || "Idioma"}</p>
      <p>{props.updatedUser.genre || "Género"}</p>
    </div>
  );
};

export default Card;
