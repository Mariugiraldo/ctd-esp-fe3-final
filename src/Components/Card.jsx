import React, { useEffect, useState } from "react";

const Card = ({ addFav, dentist }) => {
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <div className="img-container">
          <img src="images/doctor.jpg"></img>
      </div>
      <h3>{dentist.name}</h3>
      <h4>{dentist.username}</h4>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={() => addFav(dentist)} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
