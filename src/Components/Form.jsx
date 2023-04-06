import React from "react";
import { useState } from "react";



const Form = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");   

  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    alert(`Bienvenido: ${name}`);
};
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div className="App">

      <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Nombre completo"
        value={name}
        onChange={onChangeName}
        />
       <input type="text"
        placeholder="Email"
        value={email}
        onChange={onChangeEmail}
      />
      <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
