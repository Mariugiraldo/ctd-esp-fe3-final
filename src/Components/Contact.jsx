import React from 'react'
import Card from './Card'
import { useState } from "react"


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
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nombre Completo </label>
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
        <button onClick={alertar}>Enviar</button>

        

        </form>
        {err ? "Por favor verifique su información nuevamente" : null}
        {show && <Card nombre={user.nombre} email={user.email} />}

      </div>
    );
  };

export default Contact