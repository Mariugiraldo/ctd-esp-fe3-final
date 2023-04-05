import React, { useEffect, useState } from "react";
import DentistsTable from "./DentistsTable";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentists(data));
  }, []);

  return (
    <DentistsTable dentists={dentists}></DentistsTable>
  );
};

export default Home;
