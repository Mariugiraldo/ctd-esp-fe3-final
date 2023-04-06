import React from 'react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [user, setUser]= useState ({})
 
  const {name, phone, email, website} =useParams()
  const url= `https://jsonplaceholder.typicode.com/users${name}${phone}${email}${website}`

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setUser(data))
}, [])

    return (
      <div>
          <h2>{user.name}</h2>
          <h2>{user.phone}</h2>
          <h2>{user.email}</h2>
          <h2>{user.website}</h2>        
      </div>
    )
  }
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )


export default Detail