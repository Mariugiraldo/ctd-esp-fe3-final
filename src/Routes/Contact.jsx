import React from "react";
import { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: undefined,
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.name.length >= 5 && user.email) {
      setShow(true);
      setErr(false);
      alert(`Gracias ${user.name}, te contactaremos cuando antes vía mail!`);
    } else {
      setShow(false);
      setErr(true);
      alert('Por favor verifique su información nuevamente');
    }
  };

  return (
    <div className="content-top-margin">
       <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <form onSubmit={handleSubmit}>
        <label className="form-spacer" >Full Name</label>
        <input className="form-spacer" id="user.name"
          type="text"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label className="form-spacer">Email</label>
        <input className="form-spacer"
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input type="submit" className="form-spacer" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
