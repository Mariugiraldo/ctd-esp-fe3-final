import React, { Fragment, useEffect } from 'react'
import DentistsTable from './DentistsTable';

const Featured = () => {

  var favs = JSON.parse(localStorage.getItem("favs") || "[]");
 
  

  return (
    <Fragment>
      <DentistsTable dentists={favs}></DentistsTable>
    </Fragment>
  )
}

export default Featured