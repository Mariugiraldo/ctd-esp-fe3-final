import React from "react";
import Card from "./Card";
import { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const alertar = () => {
    alert(`Gracias ${user.name}, te contactaremos cuando antes vía mail!`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nombre.length >= 5) {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
  };

  return (
    <div className="dentist-panel">
       <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          value={user.nombre}
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />
        <label>Email</label>
        <input
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button onClick={alertar}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
