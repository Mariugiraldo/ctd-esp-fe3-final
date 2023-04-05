import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";

const DentistsTable = ({ dentists }) => {
  const [data, setData] = useState([]);

  const addFav = (den) => {
    var favs = JSON.parse(localStorage.getItem("favs") || "[]");

    if(!exists(favs, den)){
      favs.push(den);
    }else{
      favs.splice(favs.indexOf(den), 1);
    }

    localStorage.setItem("favs", JSON.stringify(favs));
  };

  const exists = (favs, den) => {
    for (let index = 0; index < favs.length; index++) {
      const element = favs[index];
      if(element.id == den.id){
        return true;
      }
    }

    return false;
  }

  useEffect(() => {
    setData(dentists);
  }, [dentists]);

  return (
    <Fragment>
      <div className="dentist-panel">
        <div className="table card-grid">
          {data?.map((den) => {
            return (
              <td>
                <Card dentist={den} addFav={addFav}></Card>
              </td>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default DentistsTable;
